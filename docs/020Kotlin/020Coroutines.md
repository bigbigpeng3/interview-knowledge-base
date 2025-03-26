# Kotlin协程


## 协程的基本使用 
??? answer "答案"
    # 协程在Android平台的基本使用

    协程(Coroutines)是Kotlin提供的一种轻量级线程管理方案，特别适合Android开发中处理异步任务。下面我将介绍协程的基本使用以及在Android中的典型应用场景。

    ## 协程的基本概念

    协程是可挂起(suspend)的计算实例，它可以在不阻塞线程的情况下暂停执行并在稍后恢复。与线程相比，协程更轻量(可以创建数千个而不会影响性能)，且可以通过结构化并发来避免内存泄漏。

    ## Android中协程的核心类

    ### 1. CoroutineScope - 协程作用域

    在Android中常用的协程作用域：

    - **GlobalScope**: 全局作用域，生命周期与应用一致，不推荐在常规Android开发中使用
    - **LifecycleScope**: 与Activity/Fragment生命周期绑定
    - **ViewModelScope**: 与ViewModel生命周期绑定
    - **MainScope**: 在主线程运行的协程作用域

    ```kotlin
    // 在ViewModel中使用
    class MyViewModel : ViewModel() {
        fun fetchData() {
            viewModelScope.launch {
                // 在这里执行协程代码
            }
        }
    }

    // 在Activity中使用
    class MyActivity : AppCompatActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            
            lifecycleScope.launch {
                // 在这里执行协程代码
            }
        }
    }
    ```

    ### 2. CoroutineDispatcher - 协程调度器

    Android中常用的调度器：

    - **Dispatchers.Main**: 主线程，用于UI操作
    - **Dispatchers.IO**: IO密集型操作(网络请求、数据库访问)
    - **Dispatchers.Default**: CPU密集型操作(排序、复杂计算)

    ```kotlin
    viewModelScope.launch(Dispatchers.IO) {
        // 执行IO操作
        val data = fetchFromNetwork()
        
        withContext(Dispatchers.Main) {
            // 回到主线程更新UI
            updateUI(data)
        }
    }
    ```

    ### 3. Job - 协程任务

    表示一个协程任务，可以用于取消协程或等待协程完成。

    ```kotlin
    val job = viewModelScope.launch {
        // 长时间运行的任务
    }

    // 取消协程
    job.cancel()
    ```

    ### 4. Deferred - 有结果的协程

    `async`启动的协程会返回一个`Deferred`对象，可以通过`await()`获取结果。

    ```kotlin
    viewModelScope.launch {
        val deferred1 = async { fetchData1() }
        val deferred2 = async { fetchData2() }
        
        val result1 = deferred1.await()
        val result2 = deferred2.await()
        
        // 合并结果
        showResult(result1 + result2)
    }
    ```

    ## Android中协程的典型使用场景

    ### 1. 网络请求

    ```kotlin
    viewModelScope.launch {
        try {
            val response = withContext(Dispatchers.IO) {
                retrofitService.getUserData()
            }
            _uiState.value = UiState.Success(response)
        } catch (e: Exception) {
            _uiState.value = UiState.Error(e.message)
        }
    }
    ```

    ### 2. 数据库操作

    ```kotlin
    fun insertUser(user: User) = viewModelScope.launch(Dispatchers.IO) {
        userDao.insert(user)
    }

    fun getUsers(): LiveData<List<User>> {
        return userDao.getUsers().asLiveData()
    }
    ```

    ### 3. 多个并行请求

    ```kotlin
    viewModelScope.launch {
        val userDeferred = async { getUser() }
        val postsDeferred = async { getPosts() }
        
        val user = userDeferred.await()
        val posts = postsDeferred.await()
        
        showUserProfile(user, posts)
    }
    ```

    ### 4. 超时处理

    ```kotlin
    viewModelScope.launch {
        try {
            val result = withTimeout(5000) { // 5秒超时
                fetchData()
            }
            showResult(result)
        } catch (e: TimeoutCancellationException) {
            showTimeoutError()
        }
    }
    ```

    ## 协程的最佳实践

    1. **避免使用GlobalScope** - 使用ViewModelScope或LifecycleScope以避免内存泄漏
    2. **正确处理异常** - 使用try-catch或CoroutineExceptionHandler处理异常
    3. **合理选择调度器** - 根据任务类型选择合适的Dispatcher
    4. **避免阻塞操作** - 在协程中不要使用阻塞调用(如Thread.sleep())
    5. **使用结构化并发** - 确保协程有明确的生命周期管理

    ## 协程与LiveData的结合

    Android提供了`liveData`构建器来方便地将协程与LiveData结合：

    ```kotlin
    val user: LiveData<User> = liveData {
        val data = database.loadUser() // 挂起函数
        emit(data)
    }
    ```

    协程为Android异步编程提供了更简洁、更安全的解决方案，特别是在结合ViewModel和LiveData使用时，能够有效管理生命周期和避免内存泄漏。


## 协程的基本理解
??? answer "答案"
    # Kotlin协程解析

    Kotlin协程是Kotlin语言提供的一种轻量级线程管理方案，用于简化异步编程和并发操作。下面我将从多个角度对Kotlin协程进行详细解析。

    ## 基本概念

    1. **协程是什么**：
    - 协程是一种轻量级的线程，可以在不阻塞线程的情况下挂起和恢复执行
    - 它不是线程，而是运行在线程上的可挂起计算
    - 一个线程可以运行多个协程

    2. **主要特点**：
    - 轻量：可以在单个线程上运行大量协程
    - 结构化并发：提供明确的生命周期管理和取消机制
    - 挂起函数：使用`suspend`关键字标记，可以在不阻塞线程的情况下暂停执行

    ## 核心组件

    1. **CoroutineScope**：
    - 协程作用域，定义了协程的生命周期范围
    - 常用实现：`GlobalScope`(全局)、`CoroutineScope`(自定义)、`MainScope`(主线程)
    - 结构化并发的关键，可以取消作用域下所有协程

    2. **CoroutineContext**：
    - 协程上下文，包含协程运行的各种元素
    - 主要组件：
        - Job：控制协程的生命周期
        - Dispatcher：决定协程在哪个线程上运行
        - CoroutineName：协程名称(调试用)
        - ExceptionHandler：异常处理

    3. **Dispatcher**：
    - Dispatchers.Default：CPU密集型任务
    - Dispatchers.IO：IO密集型任务
    - Dispatchers.Main：Android主线程
    - Dispatchers.Unconfined：不限定特定线程

    4. **Job**：
    - 表示一个协程任务
    - 可以取消、等待完成、查询状态
    - 可以形成父子关系，父Job取消会导致所有子Job取消

    5. **Deferred**：
    - 继承自Job，表示一个有返回值的异步任务
    - 可以通过`await()`获取结果

    ## 基本用法

    ### 启动协程

    ```kotlin
    // 方式1: launch - 不返回结果
    val job = CoroutineScope(Dispatchers.IO).launch {
        // 协程体
        delay(1000)
        println("Hello from coroutine")
    }

    // 方式2: async - 返回Deferred<T>
    val deferred = CoroutineScope(Dispatchers.Default).async {
        // 计算并返回结果
        delay(1000)
        "Result"
    }

    // 获取async结果
    val result = deferred.await()
    ```

    ### 挂起函数

    ```kotlin
    suspend fun fetchUserData(): User {
        return withContext(Dispatchers.IO) {
            // 模拟网络请求
            delay(1000)
            User("John", 30)
        }
    }
    ```

    ### 结构化并发

    ```kotlin
    fun loadData() {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                val user = async { fetchUserData() }
                val posts = async { fetchUserPosts() }
                
                updateUI(user.await(), posts.await())
            } catch (e: Exception) {
                showError(e)
            }
        }
    }
    ```

    ## 异常处理

    1. **try-catch**：
    ```kotlin
    CoroutineScope(Dispatchers.IO).launch {
        try {
            fetchData()
        } catch (e: Exception) {
            // 处理异常
        }
    }
    ```

    2. **CoroutineExceptionHandler**：
    ```kotlin
    val handler = CoroutineExceptionHandler { _, exception ->
        println("Caught $exception")
    }
    
    CoroutineScope(Dispatchers.IO + handler).launch {
        throw Exception("Test exception")
    }
    ```

    ## 协程构建器

    1. **launch**：
    - 启动一个不返回结果的协程
    - 返回Job对象，可用于取消或等待

    2. **async**：
    - 启动一个返回Deferred<T>的协程
    - 可以通过await()获取结果

    3. **runBlocking**：
    - 阻塞当前线程直到协程执行完成
    - 主要用于测试或main函数中

    4. **withContext**：
    - 切换协程上下文
    - 常用于在不同Dispatcher间切换

    ## 实际应用场景

    1. **网络请求**：
    ```kotlin
    suspend fun fetchData(): Data {
        return withContext(Dispatchers.IO) {
            // 执行网络请求
        }
    }
    ```

    2. **数据库操作**：
    ```kotlin
    suspend fun insertUser(user: User) {
        withContext(Dispatchers.IO) {
            database.userDao().insert(user)
        }
    }
    ```

    3. **并发任务**：
    ```kotlin
    suspend fun loadData() {
        val data1 = async { fetchData1() }
        val data2 = async { fetchData2() }
        
        val combinedData = combineData(data1.await(), data2.await())
    }
    ```

    4. **超时控制**：
    ```kotlin
    suspend fun fetchWithTimeout() {
        try {
            withTimeout(3000) {
                fetchData()
            }
        } catch (e: TimeoutCancellationException) {
            // 处理超时
        }
    }
    ```

    ## 性能优化技巧

    1. 避免在协程中执行阻塞操作，使用适当的Dispatcher
    2. 合理使用协程作用域，避免内存泄漏
    3. 对于大量并行任务，考虑使用`coroutineScope`或`supervisorScope`
    4. 使用`channel`或`flow`处理数据流
    5. 避免不必要的协程创建，复用现有的作用域

    ## 与RxJava比较

    1. **学习曲线**：协程更简单，概念更少
    2. **资源消耗**：协程更轻量
    3. **结构化并发**：协程原生支持
    4. **操作符丰富度**：RxJava操作符更丰富
    5. **背压处理**：RxJava有更好的背压支持

    Kotlin协程提供了一种更加直观和简洁的方式来处理异步编程，特别适合Kotlin和Android开发。通过结构化并发和挂起函数，可以编写出更清晰、更安全的异步代码。


## 协程的技术原理
??? answer "答案"
    # Kotlin协程源码分析

    Kotlin协程是Kotlin语言中用于简化异步编程的重要特性。下面从源码角度分析其核心实现机制。

    ## 一、协程的基本结构

    Kotlin协程的核心代码主要在`kotlinx.coroutines`包中，关键类包括：

    1. **Continuation.kt** - 定义协程的续体(Continuation)接口
    ```kotlin
    public interface Continuation<in T> {
        public val context: CoroutineContext
        public fun resumeWith(result: Result<T>)
    }
    ```

    2. **CoroutineContext.kt** - 定义协程上下文
    ```kotlin
    public interface CoroutineContext {
        // 操作符重载和上下文元素管理
    }
    ```

    ## 二、协程构建器实现

    ### 1. launch构建器

    `launch`是常用的协程构建器，其核心实现：

    ```kotlin
    public fun CoroutineScope.launch(
        context: CoroutineContext = EmptyCoroutineContext,
        start: CoroutineStart = CoroutineStart.DEFAULT,
        block: suspend CoroutineScope.() -> Unit
    ): Job {
        val newContext = newCoroutineContext(context)
        val coroutine = if (start.isLazy)
            LazyStandaloneCoroutine(newContext, block) else
            StandaloneCoroutine(newContext, active = true)
        coroutine.start(start, coroutine, block)
        return coroutine
    }
    ```

    ### 2. async构建器

    `async`返回`Deferred`对象，允许获取异步结果：

    ```kotlin
    public fun <T> CoroutineScope.async(
        context: CoroutineContext = EmptyCoroutineContext,
        start: CoroutineStart = CoroutineStart.DEFAULT,
        block: suspend CoroutineScope.() -> T
    ): Deferred<T> {
        val newContext = newCoroutineContext(context)
        val coroutine = if (start.isLazy)
            LazyDeferredCoroutine(newContext, block) else
            DeferredCoroutine<T>(newContext, active = true)
        coroutine.start(start, coroutine, block)
        return coroutine
    }
    ```

    ## 三、协程调度器实现

    调度器核心在`Dispatchers.kt`中：

    ```kotlin
    public actual object Dispatchers {
        public actual val Default: CoroutineDispatcher = DefaultScheduler
        public actual val Main: MainCoroutineDispatcher get() = MainDispatcherLoader.dispatcher
        public actual val Unconfined: CoroutineDispatcher = kotlinx.coroutines.Unconfined
        public val IO: CoroutineDispatcher = DefaultIoScheduler
    }
    ```

    调度器继承关系：
    ```
    CoroutineDispatcher
        -> ExperimentalCoroutineDispatcher
        -> ExecutorCoroutineDispatcher
            -> ThreadPoolDispatcher
        -> EventLoop
            -> Unconfined
    ```

    ## 四、协程挂起与恢复机制

    ### 1. 挂起函数转换

    Kotlin编译器会将挂起函数转换为状态机。例如：

    ```kotlin
    suspend fun foo() = suspendCoroutine { cont -> 
        // 异步操作
    }
    ```

    会被编译器转换为类似：
    ```java
    public final Object foo(Continuation $completion) {
        SafeContinuation cont = new SafeContinuation(IntrinsicsKt.intercepted($completion));
        // 异步操作逻辑
        return cont.getResult();
    }
    ```

    ### 2. Continuation Passing Style (CPS)

    编译器将挂起函数转换为CPS风格，每个挂起点对应一个状态：

    ```kotlin
    // 原始代码
    suspend fun fetchData(): Data {
        val data1 = fetchData1() // 挂起点1
        val data2 = fetchData2(data1) // 挂起点2
        return process(data2)
    }

    // 转换后类似
    fun fetchData(continuation: Continuation<Data>): Any {
        class FetchDataContinuation(...) : ContinuationImpl {
            var result: Any? = null
            var label = 0
            
            fun invokeSuspend(result: Any?): Any? {
                this.result = result
                return fetchData(this)
            }
        }
        
        val cont = continuation as? FetchDataContinuation ?: FetchDataContinuation(continuation)
        
        when (cont.label) {
            0 -> {
                cont.label = 1
                val result = fetchData1(cont)
                if (result == COROUTINE_SUSPENDED) return COROUTINE_SUSPENDED
                // 继续执行
            }
            1 -> {
                val data1 = cont.result as Data
                cont.label = 2
                val result = fetchData2(data1, cont)
                if (result == COROUTINE_SUSPENDED) return COROUTINE_SUSPENDED
                // 继续执行
            }
            // 其他状态...
        }
    }
    ```

    ## 五、协程上下文与拦截器

    `CoroutineContext`使用类似Map的结构存储上下文元素，关键实现：

    ```kotlin
    public interface CoroutineContext {
        public operator fun <E : Element> get(key: Key<E>): E?
        public fun <R> fold(initial: R, operation: (R, Element) -> R): R
        public operator fun plus(context: CoroutineContext): CoroutineContext
        // ...
    }

    public interface Element : CoroutineContext {
        public val key: Key<*>
    }
    ```

    拦截器实现：
    ```kotlin
    public interface ContinuationInterceptor : CoroutineContext.Element {
        companion object Key : CoroutineContext.Key<ContinuationInterceptor>
        
        fun <T> interceptContinuation(continuation: Continuation<T>): Continuation<T>
        // ...
    }
    ```

    ## 六、协程取消机制

    取消通过协作式实现，核心在`JobSupport.kt`：

    ```kotlin
    public open class JobSupport constructor(active: Boolean) : Job, ChildJob, ParentJob, SelectClause0 {
        protected final override fun cancelImpl(cause: Any?): Boolean {
            // 取消逻辑
            makeCancelling(cause)
            // ...
        }
        
        private fun makeCancelling(cause: Any?): Boolean {
            // 状态转换
            _state.update { state ->
                if (state !is Incomplete) return false // 已经完成
                val newState = Finishing(state, cause, handled = false)
                // ...
            }
            // 通知子协程
            notifyCancelling(list, cause)
        }
    }
    ```

    ## 七、协程与线程池

    默认调度器使用线程池实现，核心在`CoroutineScheduler.kt`：

    ```kotlin
    internal class CoroutineScheduler(
        val corePoolSize: Int,
        val maxPoolSize: Int,
        val idleWorkerKeepAliveNs: Long = IDLE_WORKER_KEEP_ALIVE_NS,
        val schedulerName: String = DEFAULT_SCHEDULER_NAME
    ) : Executor, Closeable {
        // 工作线程管理
        private val workers = atomicArrayOfNulls<Worker>(corePoolSize)
        
        // 任务队列
        private val globalCpuQueue = GlobalQueue()
        private val globalBlockingQueue = GlobalQueue()
        
        // 执行逻辑
        fun dispatch(block: Runnable, taskContext: TaskContext = NonBlockingContext, tailDispatch: Boolean = false) {
            // 任务分发逻辑
        }
    }
    ```

    ## 八、Flow实现原理

    Kotlin Flow是基于协程的响应式流实现，核心在`Flow.kt`：

    ```kotlin
    public interface Flow<out T> {
        public suspend fun collect(collector: FlowCollector<T>)
    }

    public fun <T> flow(block: suspend FlowCollector<T>.() -> Unit): Flow<T> = SafeFlow(block)

    private class SafeFlow<T>(private val block: suspend FlowCollector<T>.() -> Unit) : AbstractFlow<T>() {
        override suspend fun collectSafely(collector: FlowCollector<T>) {
            collector.block()
        }
    }
    ```

    ## 九、协程调试支持

    协程提供了调试工具，通过`-Dkotlinx.coroutines.debug`启用：

    ```kotlin
    public actual val CoroutineId: CoroutineContext.Key<CoroutineId> = CoroutineId.Key

    public class CoroutineId(
        public val id: Long
    ) : ThreadContextElement<String>, AbstractCoroutineContextElement(CoroutineId) {
        // 为线程上下文添加协程ID
    }
    ```

    ## 总结

    Kotlin协程通过以下核心技术实现：
    1. **CPS转换** - 编译器将挂起函数转换为状态机
    2. **续体传递** - 通过Continuation对象管理执行流程
    3. **调度器** - 控制协程在哪个线程执行
    4. **结构化并发** - 通过Job和Scope管理协程生命周期
    5. **协作式取消** - 安全地取消协程执行

    协程的轻量级特性来自于它不直接绑定线程，而是通过挂起/恢复机制实现线程的高效利用。


## 协程和Java线程的关系和区别
??? answer "答案"
    在协程的实现中（以 **Kotlin协程** 为例），协程的调度依赖于Java线程池或线程模型，但通过封装将协程任务分配到线程上执行。以下是关键类和机制的分析：

    ---

    ### **1. Kotlin协程中与Java线程交互的核心类**
    #### **（1）调度器（Dispatchers）**
    - **作用**：决定协程运行在哪个线程或线程池。
    - **核心类**：
    - `Dispatchers.Default`：默认的CPU密集型任务线程池（基于`java.util.concurrent.Executor`）。
    - `Dispatchers.IO`：I/O密集型任务的线程池（复用`Default`的线程池，但允许更大并发数）。
    - `Dispatchers.Main`：Android/JavaFX等UI线程（通过平台特定实现，如`Handler`或`JavaFX Application Thread`）。

    **源码关键点**：
    ```kotlin
    // kotlinx.coroutines.Dispatchers
    public actual val Default: CoroutineDispatcher = DefaultScheduler
    public actual val IO: CoroutineDispatcher = DefaultIoScheduler
    ```

    #### **（2）线程池实现（底层依赖Java线程）**
    - **`ExecutorCoroutineDispatcher`**：  
    抽象类，将协程调度到Java的`Executor`线程池。
    ```kotlin
    // kotlinx.coroutines.ExecutorCoroutineDispatcher
    public abstract class ExecutorCoroutineDispatcher : CoroutineDispatcher(), Closeable {
        public abstract val executor: Executor
    }
    ```
    - **`ThreadPoolDispatcher`（旧版） / `DefaultScheduler`**：  
    内部使用Java的`ThreadPoolExecutor`：
    ```kotlin
    // kotlinx.coroutines.scheduling.CoroutineScheduler
    internal class CoroutineScheduler(...) : Executor, Closeable {
        // 实际使用Java线程池的Worker线程
        private val workers = Array(parallelism) { Worker(it) }
    }
    ```

    #### **（3）协程与线程的绑定（CoroutineDispatcher）**
    - **`CoroutineDispatcher`**：  
    协程调度器的基类，通过`dispatch`方法将协程任务分配到线程。
    ```kotlin
    public abstract class CoroutineDispatcher {
        public abstract fun dispatch(context: CoroutineContext, block: Runnable)
    }
    ```
    - 实现类（如`Dispatchers.Default`）会调用Java线程池的`execute`方法。

    ---

    ### **2. 源码调用链示例**
    以`launch(Dispatchers.IO)`为例：
    1. **启动协程**：
    ```kotlin
    launch(Dispatchers.IO) { /* 协程体 */ }
    ```
    2. **调度到线程池**：
    - `Dispatchers.IO`实际是`LimitingDispatcher`，最终委托给`DefaultScheduler`。
    - `DefaultScheduler`内部通过`CoroutineScheduler`（类似线程池）执行任务。
    3. **线程池执行**：
    - `CoroutineScheduler.Worker`继承自`Thread`，最终由Java线程执行协程任务。

    ---

    ### **3. 关键代码片段**
    #### **（1）调度器使用Java线程池**
    在`kotlinx.coroutines.scheduling`包中：
    ```kotlin
    // CoroutineScheduler.kt
    internal class CoroutineScheduler(
        val corePoolSize: Int,
        val maxPoolSize: Int,
        val idleWorkerKeepAliveNs: Long
    ) : Executor {
        // Worker是Java线程的封装
        private inner class Worker private constructor() : Thread() {
            override fun run() = runWorker()
        }
    }
    ```

    #### **（2）Dispatcher的线程池绑定**
    `Dispatchers.IO`的默认实现：
    ```kotlin
    // Dispatchers.kt
    internal object DefaultScheduler : ExperimentalCoroutineDispatcher() {
        override fun dispatch(context: CoroutineContext, block: Runnable) {
            // 最终调用CoroutineScheduler的execute方法
            coroutineScheduler.dispatch(block)
        }
    }
    ```

    ---

    ### **4. 其他协程库的线程交互**
    #### **（1）Project Loom（VirtualThread）**
    - **`VirtualThread`**：  
    JVM层面的轻量级线程，直接由JVM调度到Java的`Carrier Thread`（平台线程）上。
    ```java
    // Java代码示例
    Thread.startVirtualThread(() -> {
        System.out.println("Running on virtual thread");
    });
    ```

    #### **（2）Quasar/QE**
    - **`Fiber`**：  
    通过字节码增强挂起协程，依赖`FiberScheduler`（内部使用`ForkJoinPool`或自定义线程池）。

    ---

    ### **总结**
    - **直接依赖Java线程的类**：
    - `CoroutineScheduler.Worker`（Kotlin协程）
    - `ExecutorCoroutineDispatcher`（封装Java的`Executor`）
    - `VirtualThread`（Project Loom）
    - **核心机制**：
    - 协程通过调度器（`Dispatcher`）将任务分配到Java线程池。
    - 挂起/恢复由协程库管理，不阻塞底层线程。

    通过分析`Dispatchers`、`CoroutineScheduler`等类，可以清晰看到协程如何利用Java线程实现高效调度。

## Kotlin协程的并发与同步机制
??? answer "答案"
    # Kotlin协程的并发与同步机制

    Kotlin协程提供了强大的并发编程能力，同时也需要合理的同步机制来保证线程安全。下面我将详细解析协程中的并发控制和同步技术。

    ## 一、协程并发基础

    ### 1. 并发 vs 并行
    - **并发**：多个任务交替执行，看起来像是同时进行
    - **并行**：多个任务真正同时执行（需要多核CPU支持）

    ### 2. 协程并发实现方式
    ```kotlin
    // 方式1：使用多个async并发执行
    suspend fun fetchTwoThings() {
        coroutineScope {
            val deferred1 = async { fetchData1() }
            val deferred2 = async { fetchData2() }
            val result1 = deferred1.await()
            val result2 = deferred2.await()
            // 处理结果
        }
    }

    // 方式2：使用launch并发执行多个任务
    fun doMultipleTasks() {
        CoroutineScope(Dispatchers.Default).launch {
            val job1 = launch { task1() }
            val job2 = launch { task2() }
            job1.join()
            job2.join()
        }
    }
    ```

    ## 二、协程同步机制

    ### 1. 共享状态问题
    当多个协程访问共享可变状态时会出现竞态条件：

    ```kotlin
    var counter = 0

    fun main() = runBlocking {
        repeat(100) {
            launch {
                delay(10)
                counter++
            }
        }
        delay(1000)
        println("Counter = $counter") // 可能小于100
    }
    ```

    ### 2. 同步解决方案

    #### (1) 互斥锁（Mutex）
    ```kotlin
    val mutex = Mutex()
    var counter = 0

    fun main() = runBlocking {
        repeat(100) {
            launch {
                delay(10)
                mutex.withLock {
                    counter++
                }
            }
        }
        delay(1000)
        println("Counter = $counter") // 保证是100
    }
    ```

    特点：
    - 协程挂起而非阻塞
    - 不可重入（同一协程不能重复获取锁）
    - 比Java的synchronized更轻量

    #### (2) 原子变量（Atomic）
    ```kotlin
    val counter = AtomicInteger()

    fun main() = runBlocking {
        repeat(100) {
            launch {
                delay(10)
                counter.incrementAndGet()
            }
        }
        delay(1000)
        println("Counter = ${counter.get()}") // 保证是100
    }
    ```

    适用场景：
    - 简单计数器
    - 单一变量的原子操作

    #### (3) 单线程限制（Actor模式）
    ```kotlin
    sealed class CounterMsg
    object IncCounter : CounterMsg() // 递增消息
    class GetCounter(val response: CompletableDeferred<Int>) : CounterMsg() // 获取值消息

    fun counterActor() = CoroutineScope(Dispatchers.Default).actor<CounterMsg> {
        var counter = 0
        for (msg in channel) {
            when (msg) {
                is IncCounter -> counter++
                is GetCounter -> msg.response.complete(counter)
            }
        }
    }

    suspend fun main() {
        val counter = counterActor()
        repeat(100) {
            counter.send(IncCounter)
        }
        val response = CompletableDeferred<Int>()
        counter.send(GetCounter(response))
        println("Counter = ${response.await()}")
        counter.close()
    }
    ```

    特点：
    - 所有状态修改都通过消息传递
    - 状态被限制在单个协程中访问
    - 避免了显式同步

    #### (4) 协程安全的数据结构
    ```kotlin
    val counterContext = newSingleThreadContext("CounterContext")
    var counter = 0

    fun main() = runBlocking {
        repeat(100) {
            launch(counterContext) { // 所有修改都在同一线程
                counter++
            }
        }
        delay(1000)
        println("Counter = $counter") // 保证是100
    }
    ```

    ## 三、高级并发模式

    ### 1. 限制并发数
    ```kotlin
    val limitedDispatcher = Dispatchers.IO.limitedParallelism(4) // 限制最多4个并发

    fun loadManyItems() = runBlocking {
        val jobs = List(100) {
            async(limitedDispatcher) {
                loadItem(it)
            }
        }
        jobs.awaitAll()
    }
    ```

    ### 2. 协程同步屏障（Barrier）
    ```kotlin
    suspend fun concurrentTasks() = coroutineScope {
        val barrier = CyclicBarrier(3)
        
        launch { 
            task1()
            barrier.await()
        }
        launch { 
            task2()
            barrier.await()
        }
        launch { 
            task3()
            barrier.await()
        }
        
        println("All tasks completed")
    }
    ```

    ### 3. 生产者-消费者模式（Channel）
    ```kotlin
    fun producerConsumer() = runBlocking {
        val channel = Channel<Int>()
        
        // 生产者
        launch {
            repeat(10) {
                channel.send(it)
                delay(100)
            }
            channel.close()
        }
        
        // 消费者
        launch {
            for (item in channel) {
                println("Received: $item")
            }
        }
    }
    ```

    ## 四、最佳实践

    1. **避免共享可变状态**：优先使用消息传递而非共享状态
    2. **最小化同步范围**：只在必要时使用同步机制
    3. **选择合适的同步工具**：
    - 简单计数器 → 原子变量
    - 复杂操作 → Mutex
    - 复杂状态 → Actor或单线程限制
    4. **注意协程取消**：同步操作应考虑协程取消的情况
    5. **性能考量**：
    - 高频操作考虑原子变量
    - 低频复杂操作考虑Mutex
    - 大量并发考虑限制并发数

    ## 五、常见问题与解决方案

    **问题1**：为什么我的计数器结果不准确？
    **解决**：使用Mutex或原子变量保护共享状态

    **问题2**：协程死锁如何避免？
    **解决**：
    - 避免在持有锁时调用挂起函数
    - 使用tryLock设置超时
    - 保持锁的获取顺序一致

    **问题3**：如何控制资源访问？
    **解决**：使用Semaphore
    ```kotlin
    val semaphore = Semaphore(3) // 允许3个并发访问

    suspend fun accessResource() {
        semaphore.acquire()
        try {
            // 访问受限资源
        } finally {
            semaphore.release()
        }
    }
    ```

    Kotlin协程通过提供各种同步原语和并发模式，使得编写并发代码更加简单和安全。理解这些机制并根据具体场景选择合适的方案，可以构建出高效且正确的并发应用程序。


## ViewModelScope.launch{} 这个launch是哪个线程？
??? answer "答案"
    在 Kotlin 协程中，`viewModelScope.launch {}` 启动的协程默认运行在主线程（UI 线程）上。这是因为 `viewModelScope` 是 `ViewModel` 的一个扩展属性，它与 `Dispatchers.Main` 相关联。

    ### 为什么是主线程？
    1. **UI 更新需求**：`ViewModel` 通常用于管理与 UI 相关的数据，而 UI 更新必须在主线程上进行。因此，`viewModelScope` 默认使用 `Dispatchers.Main`，以确保协程中的代码可以直接操作 UI。

    2. **简化开发**：通过默认使用主线程，开发者无需显式切换线程来处理 UI 更新，减少了代码复杂性。

    ### 如何切换线程？
    如果你需要在协程中执行耗时操作（如网络请求或数据库查询），可以使用 `withContext` 切换到其他调度器（如 `Dispatchers.IO`）：

    ```kotlin
    viewModelScope.launch {
        // 默认在主线程执行
        val result = withContext(Dispatchers.IO) {
            // 在 IO 线程执行耗时操作
            performNetworkRequest()
        }
        // 回到主线程更新 UI
        updateUI(result)
    }
    ```

    ### 总结
    - `viewModelScope.launch {}` 默认在主线程运行，适合 UI 更新。
    - 耗时操作应切换到 `Dispatchers.IO` 或其他合适的调度器。
    - 使用 `withContext` 可以方便地在不同线程间切换。



## 协程父子job的取消顺序
??? answer "答案"
    # 协程父子 Job 的取消顺序

    在 Kotlin 协程中，父子 Job 的取消遵循特定的顺序规则：

    ## 取消传播顺序

    1. **父 Job 取消时**：
    - 父 Job 取消会自动取消所有子 Job
    - 取消是从父向子传播的（自上而下）
    - 父 Job 会等待所有子 Job 完成取消后，自己才最终完成取消

    2. **子 Job 取消时**：
    - 默认情况下，子 Job 取消不会影响父 Job
    - 但如果子 Job 是因异常而取消，且没有被处理，则异常会传播到父 Job

    ## 代码示例

    ```kotlin
    val parentJob = launch {
        val childJob1 = launch {
            try {
                delay(Long.MAX_VALUE)
            } finally {
                println("Child 1 cancelled") // 会执行
            }
        }
        
        val childJob2 = launch {
            delay(100)
            println("Child 2 throws exception")
            throw RuntimeException() // 会传播到父Job
        }
    }

    delay(200)
    parentJob.cancel() // 会先取消childJob1，然后等待childJob2因异常取消
    ```

    ## 重要规则

    - **结构化并发**原则：父协程总是会等待所有子协程完成
    - **取消是双向的**：虽然子Job取消默认不影响父Job，但通过异常可以实现影响
    - **处理异常**：使用`SupervisorJob`或`supervisorScope`可以防止子Job的异常传播到父Job

    ## 最佳实践

    - 在子协程的`finally`块中清理资源
    - 使用`NonCancellable`上下文执行必须完成的清理操作
    - 对于不想被意外取消的协程，使用`SupervisorJob`

## 
??? answer "答案"


## 
??? answer "答案"

## 
??? answer "答案"