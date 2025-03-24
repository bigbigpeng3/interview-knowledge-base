

## 什么是KMP Kotlin MultiPlatForm，它能做什么？
??? answer "答案"
    KMP（Kotlin Multiplatform）是 JetBrains 推出的一项技术，旨在让开发者使用 Kotlin 编写跨平台代码，能够在多个平台上共享业务逻辑，同时保留各平台的特定实现。

    ### KMP 的核心功能

    1. **代码共享**：
    - 允许在多个平台（如 Android、iOS、Web、桌面等）之间共享代码，减少重复开发。

    2. **平台特定实现**：
    - 支持在共享代码中调用平台特定的 API，确保各平台的独特性。

    3. **互操作性**：
    - 与现有代码库兼容，支持与 Java、Swift、JavaScript 等语言的互操作。

    4. **工具支持**：
    - 提供 Gradle 插件和 IDE 支持，简化跨平台项目的配置和开发。

    ### KMP 的应用场景

    1. **移动开发**：
    - 在 Android 和 iOS 之间共享业务逻辑，UI 层仍使用原生开发。

    2. **全栈开发**：
    - 前后端使用相同的 Kotlin 代码，提升开发效率。

    3. **桌面应用**：
    - 开发跨 Windows、macOS、Linux 的桌面应用。

    4. **库开发**：
    - 创建跨平台的库，供不同平台使用。

    ### 示例

    以下是一个简单的 KMP 项目结构：

    ```kotlin
    // commonMain - 共享代码
    expect fun platformName(): String

    fun greet(): String {
        return "Hello from ${platformName()}"
    }

    // androidMain - Android 实现
    actual fun platformName(): String {
        return "Android"
    }

    // iosMain - iOS 实现
    actual fun platformName(): String {
        return "iOS"
    }
    ```

    ### 总结

    KMP 通过代码共享和平台特定实现，帮助开发者高效构建跨平台应用，减少重复工作，同时保持各平台的独特性。



## 哪些是目前KMP的局限？
??? answer "答案"
    尽管 Kotlin Multiplatform (KMP) 提供了强大的跨平台开发能力，但它仍有一些局限和挑战。以下是一些主要的限制：

    ### 1. **成熟度**
    - **生态系统**：KMP 的生态系统仍在发展中，某些库和工具可能不如原生开发成熟。
    - **社区支持**：虽然 Kotlin 社区活跃，但 KMP 的社区相对较小，资源和支持有限。

    ### 2. **平台特定代码**
    - **复杂性**：虽然 KMP 允许共享代码，但平台特定代码的编写和管理可能增加复杂性。
    - **维护成本**：不同平台的特定实现需要额外维护，可能增加开发成本。

    ### 3. **性能**
    - **运行时开销**：KMP 的跨平台代码可能引入额外的运行时开销，影响性能。
    - **优化难度**：跨平台代码的优化可能比原生代码更具挑战性。

    ### 4. **工具和 IDE 支持**
    - **工具链**：KMP 的工具链仍在完善中，某些功能可能不如原生开发工具成熟。
    - **IDE 支持**：虽然 IntelliJ IDEA 和 Android Studio 对 KMP 提供了良好支持，但在某些情况下可能会遇到问题。

    ### 5. **学习曲线**
    - **新技术**：KMP 引入了新的概念和工具，开发者需要时间学习和适应。
    - **文档和教程**：尽管 Kotlin 的文档较为完善，但 KMP 的特定文档和教程相对较少。

    ### 6. **互操作性**
    - **语言兼容性**：虽然 KMP 支持与 Java、Swift 等语言的互操作，但在某些情况下可能会遇到兼容性问题。
    - **API 差异**：不同平台的 API 差异可能导致跨平台代码的复杂性增加。

    ### 7. **第三方库**
    - **库支持**：并非所有第三方库都支持 KMP，可能需要自行实现或寻找替代方案。
    - **依赖管理**：跨平台项目的依赖管理可能比单一平台项目更复杂。

    ### 8. **调试和测试**
    - **调试工具**：跨平台代码的调试工具可能不如原生开发工具成熟。
    - **测试复杂性**：跨平台代码的测试可能需要覆盖多个平台，增加测试复杂性。

    ### 总结
    KMP 提供了强大的跨平台开发能力，但在成熟度、性能、工具支持、学习曲线、互操作性和第三方库支持等方面仍存在一些局限。开发者在选择 KMP 时需要权衡这些因素，并根据项目需求做出决策。随着 KMP 生态系统的不断发展，这些局限有望逐步得到改善。



## 目前可以通过KMP实现UI的跨平台吗？
??? answer "答案"
    目前 KMP（Kotlin Multiplatform）确实可以实现 UI 的跨平台开发，但与业务逻辑的跨平台相比，UI 跨平台还在发展中。以下是当前 KMP 在 UI 跨平台方面的情况：

    ### Compose Multiplatform

    最主要的 KMP UI 解决方案是 Compose Multiplatform（原名 Jetpack Compose for Desktop/Web），它是 Android 上 Jetpack Compose 声明式 UI 框架的跨平台版本。

    Compose Multiplatform 允许开发者：
    - 在 Android、iOS、桌面（Windows、macOS、Linux）和 Web 上共享 UI 代码
    - 使用相同的 Compose 声明式 API 构建界面
    - 复用 UI 组件和状态管理逻辑

    ### 当前状态

    1. **Android**：完全支持，这是 Compose 的发源地
    2. **桌面**：已正式发布，支持 Windows、macOS 和 Linux
    3. **Web**：通过 Compose HTML 可以将 Compose 编译到 JavaScript，但仍处于实验阶段
    4. **iOS**：支持已经进入 Alpha 阶段，2023 年底 JetBrains 发布了 Compose Multiplatform for iOS 的预览版

    ### 其他 KMP UI 解决方案

    除了 Compose Multiplatform 外，还有一些其他 UI 解决方案：

    1. **KMM (Kotlin Multiplatform Mobile)**：专注于 Android 和 iOS 的共享代码，但通常建议使用各平台原生 UI（SwiftUI/UIKit 和 Jetpack Compose/XML）

    2. **Moko**：一系列帮助实现跨平台 UI 交互的库，包括视图模型、资源共享等

    3. **Kodee**：提供了一套抽象层，允许使用单一 API 访问各平台的原生 UI 框架

    ### 实际应用情况

    尽管 KMP 的 UI 跨平台能力在不断进步，但在生产环境中：

    - 许多团队选择共享业务逻辑和数据层，但使用各平台原生 UI 框架
    - 对于需要高度定制 UI 或平台特定功能的应用，混合方法（共享部分 UI 代码，部分使用原生）较为常见
    - 完全跨平台 UI 解决方案仍在成熟中，特别是在 iOS 支持方面

    总的来说，KMP 的 UI 跨平台能力是存在的，但相比业务逻辑的共享，它还没有那么成熟和广泛应用。不过随着 Compose Multiplatform 的持续发展，这一领域正在快速进步。



## 哪些是官方KMP目前没有办法实现的功能？举几个例子。KMP的优势和局限。
??? answer "答案"

    KMP（Kotlin Multiplatform）有许多优势，但也存在一些当前无法实现或需要特殊处理的功能。以下是一些例子和对KMP优势与局限的分析：

    ### 官方KMP目前难以实现的功能

    1. **原生平台特定功能**：
    - iOS特有的生物识别（如FaceID的某些高级功能）
    - Android特有的后台服务和权限系统
    - 特定平台专有硬件访问（如苹果的LiDAR扫描仪）

    2. **高性能图形和游戏**：
    - 直接访问Metal/OpenGL ES/Vulkan等低级图形API
    - 需要平台特定优化的高性能游戏引擎功能

    3. **特定平台SDK集成**：
    - 苹果生态系统特有功能（如Apple Watch集成、HealthKit深度功能）
    - 谷歌专属服务（如高级Google Maps功能、特定Google Play服务）

    4. **复杂UI交互**：
    - 平台特有的手势识别系统
    - 特定平台的高级动画和过渡效果

    5. **系统级集成**：
    - 默认应用替换（如默认浏览器、默认相机）
    - 系统级权限和深度操作系统集成

    ### KMP的优势

    1. **代码共享效率**：
    - 可以共享高达70%的代码，减少维护成本和bug出现概率
    - 业务逻辑、网络层、数据处理可以完全跨平台

    2. **渐进式采用**：
    - 可以逐步集成到现有项目中，不需要完全重写
    - 允许团队决定哪些部分共享，哪些部分保持平台特定

    3. **保留原生性能**：
    - 编译为真正的原生代码，而非解释执行
    - 比许多其他跨平台解决方案性能更好

    4. **类型安全和现代语言特性**：
    - 利用Kotlin的所有优势，如协程、流、函数式编程

    5. **强大的工具支持**：
    - JetBrains IDE集成
    - 官方支持和持续发展

    ### KMP的局限

    1. **生态系统成熟度**：
    - 与React Native或Flutter相比，库和组件生态系统较小
    - 跨平台UI解决方案（如Compose Multiplatform）仍在成熟中

    2. **学习曲线**：
    - 需要了解各目标平台的特性
    - 配置和构建系统较复杂

    3. **调试复杂性**：
    - 跨平台调试有时候比单平台开发更复杂
    - 某些平台特定问题难以在共享代码中诊断

    4. **团队技能要求**：
    - 理想情况下需要团队熟悉Kotlin
    - 在过渡期可能需要同时维护多个平台的知识

    5. **依赖管理**：
    - 管理多平台依赖可能复杂
    - 某些库可能不提供多平台版本

    KMP特别适合那些已经在Android上使用Kotlin，并希望将业务逻辑扩展到iOS或其他平台的团队。对于需要高度定制UI体验或大量使用平台特定功能的应用，通常采用混合策略最有效：共享核心逻辑，但保留平台特定UI和功能的原生实现。

## 你是否推荐使用KMP跨端？Android iOS。
??? answer "答案"
    KMP（Kotlin Multiplatform）在业务逻辑层面的跨平台开发已经相当成熟，尤其是针对Android和iOS的共享代码场景。基于当前的状态，我会建议：

    ### KMP在业务逻辑层的成熟度评估

    KMP对于共享业务逻辑、网络层、数据处理等非UI部分已经相当稳定，很多企业级项目已经在生产环境中使用，包括：

    - Cash App (由Square开发)
    - Netflix的部分功能
    - Philips、VMware、Autodesk等企业的应用
    - JetBrains自己的应用如Space

    ### 我的推荐

    是的，对于Android和iOS的**业务逻辑部分**跨平台开发，我会推荐使用KMP，基于以下理由：

    1. **代码复用收益明显**：
    - 网络层、数据处理、状态管理等代码可以高效共享
    - 减少在两个平台上实现相同业务逻辑的重复工作

    2. **JetBrains的长期支持**：
    - KMP是JetBrains的战略项目，持续获得投资和改进
    - Kotlin 1.8+版本大幅改善了多平台支持

    3. **成熟的生态系统**：
    - 核心库如Ktor（网络）、SQLDelight（数据库）、Kotlinx.serialization（序列化）等已经非常稳定
    - 越来越多第三方库提供KMP支持

    ### 使用建议

    如果你决定采用KMP，我建议：

    1. **从共享核心业务逻辑开始**：
    - 首先迁移网络层、数据模型和业务规则
    - 保留平台特定的UI实现（SwiftUI/UIKit和Jetpack Compose/XML）

    2. **采用渐进式方法**：
    - 不要试图一次性将所有内容转换为KMP
    - 从一个功能模块开始，验证流程，然后扩展

    3. **使用KMM插件**：
    - 利用Android Studio的Kotlin Multiplatform Mobile插件简化开发
    - 它提供了针对移动平台的特定工具和模板

    4. **注意平台差异**：
    - 使用expect/actual模式处理平台特定功能
    - 为iOS开发设置适当的内存管理策略

    总的来说，对于业务逻辑层面的共享，KMP已经足够成熟可用于生产环境。它能显著减少维护两套代码的成本，同时保持良好的性能和原生体验。不过UI层面的共享（通过Compose Multiplatform）目前仍处于发展阶段，在生产环境中应谨慎使用。


## KMP涉及网络，数据，和逻辑的案例。
??? answer "答案"
    下面我为你提供一个具体的KMP案例，展示如何实现跨平台的网络请求、数据模型和业务规则。这个例子将创建一个简单的天气应用的核心逻辑层。

    ```kotlin
    // 项目结构
    // 
    // - shared/
    //   - build.gradle.kts  (Kotlin Multiplatform 项目配置)
    //   - src/
    //     - commonMain/     (共享代码)
    //     - androidMain/    (Android 特定实现)
    //     - iosMain/        (iOS 特定实现)

    // build.gradle.kts (共享模块)
    plugins {
        kotlin("multiplatform") version "1.9.0"
        kotlin("plugin.serialization") version "1.9.0"
        id("com.android.library")
    }

    kotlin {
        android()
        ios()
        
        sourceSets {
            val commonMain by getting {
                dependencies {
                    // 网络请求
                    implementation("io.ktor:ktor-client-core:2.3.2")
                    implementation("io.ktor:ktor-client-content-negotiation:2.3.2")
                    implementation("io.ktor:ktor-serialization-kotlinx-json:2.3.2")
                    
                    // 序列化
                    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.5.1")
                    
                    // 协程
                    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.2")
                }
            }
            
            val androidMain by getting {
                dependencies {
                    implementation("io.ktor:ktor-client-android:2.3.2")
                }
            }
            
            val iosMain by getting {
                dependencies {
                    implementation("io.ktor:ktor-client-darwin:2.3.2")
                }
            }
        }
    }

    // 1. 数据模型层 - 共享代码 (commonMain)

    // 数据模型使用 kotlinx.serialization
    import kotlinx.serialization.Serializable

    @Serializable
    data class WeatherData(
        val location: String,
        val temperature: Double,
        val humidity: Int,
        val windSpeed: Double,
        val condition: String,
        val forecast: List<DailyForecast>
    )

    @Serializable
    data class DailyForecast(
        val day: String,
        val minTemp: Double,
        val maxTemp: Double,
        val condition: String
    )

    // 2. 网络层 - 共享代码 (commonMain)

    import io.ktor.client.*
    import io.ktor.client.plugins.contentnegotiation.*
    import io.ktor.serialization.kotlinx.json.*
    import io.ktor.client.request.*
    import io.ktor.client.call.*
    import kotlinx.serialization.json.Json

    class WeatherApi {
        // 创建 HTTP 客户端实例
        private val client = HttpClient {
            install(ContentNegotiation) {
                json(Json {
                    ignoreUnknownKeys = true
                    prettyPrint = true
                    isLenient = true
                })
            }
        }
        
        // 网络请求函数
        suspend fun getWeatherData(city: String): WeatherData {
            return client.get("https://api.weatherexample.com/data") {
                parameter("city", city)
                parameter("units", "metric")
            }.body()
        }
        
        // 清理资源
        fun close() {
            client.close()
        }
    }

    // 3. 平台特定代码 - 定义预期的平台功能

    // commonMain - 定义期望实现
    expect class LocationProvider {
        suspend fun getCurrentLocation(): String
    }

    // androidMain - 实际实现
    actual class LocationProvider {
        actual suspend fun getCurrentLocation(): String {
            // 在实际应用中，这里会使用 Android 的位置服务
            // 为简化示例，直接返回默认值
            return "Beijing"
        }
    }

    // iosMain - 实际实现
    actual class LocationProvider {
        actual suspend fun getCurrentLocation(): String {
            // 在实际应用中，这里会使用 iOS 的 CoreLocation
            // 为简化示例，直接返回默认值
            return "Beijing"
        }
    }

    // 4. 业务逻辑层 - 共享代码 (commonMain)

    import kotlinx.coroutines.flow.Flow
    import kotlinx.coroutines.flow.MutableStateFlow
    import kotlinx.coroutines.flow.asStateFlow

    class WeatherRepository(
        private val api: WeatherApi,
        private val locationProvider: LocationProvider
    ) {
        // 使用 StateFlow 存储当前天气状态
        private val _weatherData = MutableStateFlow<WeatherState>(WeatherState.Loading)
        val weatherData: Flow<WeatherState> = _weatherData.asStateFlow()
        
        // 业务逻辑：获取天气信息
        suspend fun fetchWeather(city: String? = null) {
            try {
                _weatherData.value = WeatherState.Loading
                
                // 如果没有指定城市，使用当前位置
                val locationToUse = city ?: locationProvider.getCurrentLocation()
                
                // 调用 API 获取数据
                val data = api.getWeatherData(locationToUse)
                
                // 处理业务规则 - 例如温度格式化、天气警告等
                val processedData = processWeatherData(data)
                
                _weatherData.value = WeatherState.Success(processedData)
            } catch (e: Exception) {
                _weatherData.value = WeatherState.Error("无法获取天气数据: ${e.message}")
            }
        }
        
        // 业务规则：处理天气数据
        private fun processWeatherData(data: WeatherData): WeatherData {
            // 示例业务规则1：如果温度过高，添加高温警告
            val condition = if (data.temperature > 35) {
                "${data.condition} (高温警告)"
            } else {
                data.condition
            }
            
            // 示例业务规则2：预测未来几天的最高温度趋势
            val forecast = data.forecast.map { daily ->
                // 如果最高温度超过30度，添加标记
                val updatedCondition = if (daily.maxTemp > 30) {
                    "${daily.condition} (较热)"
                } else {
                    daily.condition
                }
                
                daily.copy(condition = updatedCondition)
            }
            
            return data.copy(condition = condition, forecast = forecast)
        }
    }

    // 定义状态
    sealed class WeatherState {
        object Loading : WeatherState()
        data class Success(val data: WeatherData) : WeatherState()
        data class Error(val message: String) : WeatherState()
    }

    // 5. 示例：如何在Android/iOS中使用这个共享代码

    // 在Android ViewModel中使用
    /*
    class AndroidWeatherViewModel(application: Application) : AndroidViewModel(application) {
        private val repository = WeatherRepository(
            WeatherApi(),
            LocationProvider()
        )
        
        val weatherData = repository.weatherData.asLiveData()
        
        fun loadWeather(city: String? = null) {
            viewModelScope.launch {
                repository.fetchWeather(city)
            }
        }
    }
    */

    // 在iOS使用(Swift)
    /*
    class WeatherViewModel: ObservableObject {
        @Published var state: WeatherState = .loading
        
        private let repository: WeatherRepository
        
        init() {
            repository = WeatherRepository(
                api: WeatherApi(),
                locationProvider: LocationProvider()
            )
            
            // 创建一个Kotlin协程作用域
            let scope = CoroutineScope(Dispatchers.Main.immediate)
            
            // 收集Flow
            scope.launch {
                repository.weatherData.collect { state in
                    // 更新SwiftUI状态
                    self.state = state
                }
            }
        }
        
        func loadWeather(city: String? = nil) {
            let scope = CoroutineScope(Dispatchers.Main.immediate)
            scope.launch {
                repository.fetchWeather(city: city)
            }
        }
    }
    */

    ```

    这个例子展示了如何使用KMP构建跨平台的天气应用核心功能，包含了以下关键元素：

    ### 核心组件解释

    1. **数据模型层**
    - 使用`kotlinx.serialization`定义可序列化的数据类
    - 数据模型完全共享，不需要平台特定代码

    2. **网络层**
    - 使用Ktor客户端进行网络请求
    - 共享API调用逻辑，但平台特定的HTTP引擎通过依赖注入

    3. **平台特定功能**
    - 使用`expect/actual`模式处理需要平台特定实现的功能
    - 示例中的`LocationProvider`在不同平台有不同实现

    4. **业务逻辑层**
    - `WeatherRepository`封装所有业务规则
    - 使用协程和Flow处理异步操作和数据流
    - 实现了数据处理规则，如温度警告和天气状态处理

    ### 如何使用

    该示例展示了KMP项目的组织结构，包括：

    - `commonMain`：包含所有共享代码
    - `androidMain`：Android特定实现
    - `iosMain`：iOS特定实现

    在实际项目中，你只需要在各自平台上实现UI层，而核心的业务逻辑、网络请求和数据处理可以完全共享。

    ### 优势

    1. **代码复用**：网络层、数据模型和业务规则只需编写一次
    2. **类型安全**：使用Kotlin强类型系统，减少错误
    3. **灵活性**：可以轻松处理平台特定功能
    4. **现代API**：利用协程和Flow处理异步操作

    这个例子虽然简化了一些细节，但展示了KMP在实际项目中如何应用于业务逻辑层面。你可以基于这个结构扩展更复杂的功能，如缓存策略、离线支持、更复杂的业务规则等。


## KMP能否使用Okhttp Retrofit这类已经很易用的库？并且还能够跨平台？
??? answer "答案"
    KMP（Kotlin Multiplatform）对于使用OkHttp和Retrofit这类Java/Android库存在一些限制。我来解释一下这种情况：

    ### OkHttp 和 Retrofit 在 KMP 中的使用

    OkHttp 和 Retrofit 是针对 JVM 平台设计的，主要面向 Android 和 Java 服务器开发：

    1. **直接在共享代码中使用的限制**：
    - 这些库**不能**直接在 KMP 的共享代码（`commonMain`）中使用
    - 它们依赖于 JVM 平台的特定功能，无法在 iOS/Native 平台上运行

    2. **仅限 Android 平台使用**：
    - 可以在 KMP 项目的 `androidMain` 源集中使用这些库
    - 但这意味着你需要为 iOS 提供一个独立的实现

    ### 替代方案

    KMP 提供了专门设计的跨平台网络库，其中最主要的是：

    1. **Ktor Client**：
    - 专为跨平台设计的网络库
    - 提供类似功能，但能在所有 KMP 目标平台上运行
    - 支持不同平台的引擎（Android、iOS、JS）
    - 提供拦截器、序列化、请求/响应处理等功能

    2. **对 Retrofit 功能的模拟**：
    - 虽然 Ktor 不提供完全相同的 API 接口定义方式
    - 但可以创建扩展函数和模块化 API 类来实现类似的代码组织

    ### 实际方案

    在 KMP 项目中处理网络请求有以下几种方式：

    1. **完全共享方案**：
    - 在共享代码中使用 Ktor Client
    - 所有平台使用相同的网络代码

    2. **混合方案**：
    - 在 Android 端使用现有的 OkHttp/Retrofit 代码 
    - 在 iOS 端使用 Ktor 或原生网络库
    - 通过 `expect/actual` 模式提供统一接口

    3. **抽象接口方案**：
    - 在共享代码中定义接口
    - Android 实现使用 Retrofit
    - iOS 实现使用其他技术
    - 缺点是实现代码冗余

    大多数 KMP 项目选择方案 1，完全使用 Ktor 代替 Retrofit/OkHttp，因为这样可以最大化代码共享并减少维护成本。Ktor 虽然与 Retrofit 的使用方式不同，但功能上完全可以满足需求，且已经相当成熟和稳定。


## KMP常用库
??? answer "答案"
    # KMP项目常用库及其作用

    以下是Kotlin Multiplatform (KMP)项目中经常使用的库及其主要功能：

    ## 网络请求

    1. **Ktor Client**
    - **作用**：跨平台HTTP客户端
    - **特点**：支持协程、灵活的插件系统、可配置的序列化
    - **官方维护**：由JetBrains开发

    2. **Kermit**
    - **作用**：跨平台日志框架
    - **特点**：支持多平台的日志记录，灵活的日志输出配置

    ## 数据存储

    3. **SQLDelight**
    - **作用**：跨平台SQL数据库访问
    - **特点**：从SQL语句生成类型安全的Kotlin API
    - **平台实现**：在Android上使用SQLite，iOS上使用SQLite或Core Data

    4. **Multiplatform Settings**
    - **作用**：跨平台键值对存储
    - **特点**：简单的偏好设置存储
    - **平台实现**：Android上使用SharedPreferences，iOS上使用NSUserDefaults

    5. **Realm Kotlin**
    - **作用**：跨平台移动数据库
    - **特点**：对象数据库，实时同步功能

    ## 序列化

    6. **Kotlinx.Serialization**
    - **作用**：跨平台数据序列化框架
    - **特点**：编译时代码生成，不依赖反射
    - **官方维护**：Kotlin官方库

    ## 并发与异步

    7. **Kotlinx.Coroutines**
    - **作用**：跨平台协程支持
    - **特点**：结构化并发，Flow API
    - **官方维护**：Kotlin官方库

    8. **KotlinX.AtomicFu**
    - **作用**：提供无锁线程安全操作
    - **特点**：在Native平台上也能高效运行的原子操作

    ## 依赖注入

    9. **Koin**
    - **作用**：轻量级依赖注入框架
    - **特点**：纯Kotlin实现，易于使用

    10. **Kodein**
        - **作用**：另一个依赖注入框架
        - **特点**：专为Kotlin设计，支持多平台

    ## 日期/时间处理

    11. **KotlinX.DateTime**
        - **作用**：跨平台日期和时间API
        - **特点**：不可变的日期时间类型
        - **官方维护**：Kotlin官方库

    ## 图像处理

    12. **Imageio**
        - **作用**：跨平台图像加载和处理
        - **特点**：支持常见图像格式的读写

    ## UI相关（共享视图模型）

    13. **MVIKotlin**
        - **作用**：实现MVI架构模式
        - **特点**：响应式UI状态管理

    14. **Decompose**
        - **作用**：组件化UI导航和状态保存
        - **特点**：与Compose Multiplatform配合使用

    ## 测试

    15. **KotlinTest**
        - **作用**：跨平台单元测试框架
        - **特点**：类似于ScalaTest的风格

    16. **MockK**
        - **作用**：Kotlin模拟框架
        - **特点**：支持协程和跨平台测试

    ## 其他实用工具

    17. **UUID**
        - **作用**：跨平台UUID生成
        - **特点**：符合标准的UUID实现

    18. **kotlin-logging**
        - **作用**：跨平台的类似SLF4J的日志抽象
        - **特点**：简洁的日志API

    19. **Napier**
        - **作用**：简单的跨平台日志库
        - **特点**：轻量级，易于配置

    20. **KMP-NativeCoroutines**
        - **作用**：简化从Swift/Objective-C调用Kotlin协程
        - **特点**：改善iOS平台上的协程使用体验

    这些库构成了KMP开发的核心工具链，它们专门为跨平台开发设计，能够在不同目标平台上提供一致的API。选择合适的库组合可以大大提高跨平台项目的开发效率和代码质量。


## KMP 常规面试题
??? answer "答案"


## 
??? answer "答案"

