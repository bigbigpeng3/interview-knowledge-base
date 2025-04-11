# 数据结构

## JAVA常用集合类功能、区别和性能  
??? answer "答案"
    在Java中，集合类是用来存储和操作一组对象的容器。常用的集合类主要分为两大类：**Collection** 和 **Map**。以下是常见的集合类及其功能、区别和性能分析。

    ---

    ## 一、Collection 接口
    Collection 接口是单列集合的根接口，主要分为以下三类：
    1. **List**：有序、可重复的集合。
    2. **Set**：无序、不可重复的集合。
    3. **Queue**：队列，支持先进先出（FIFO）或优先级排序。

    ### 1. List 接口
    #### 常用实现类：
    - **ArrayList**
    - **LinkedList**
    - **Vector**（已过时，不推荐使用）

    #### 功能：
    - 有序集合，允许重复元素。
    - 支持通过索引访问元素。

    #### 区别：
    - **ArrayList**：
    - 基于动态数组实现。
    - 查询快（O(1)），增删慢（O(n)）。
    - 线程不安全。
    - **LinkedList**：
    - 基于双向链表实现。
    - 增删快（O(1)），查询慢（O(n)）。
    - 支持队列和栈操作。
    - **Vector**：
    - 类似于 ArrayList，但线程安全（性能较差）。
    - 已过时，推荐使用 `Collections.synchronizedList` 或 `CopyOnWriteArrayList`。

    #### 性能：
    - **ArrayList**：适合频繁查询的场景。
    - **LinkedList**：适合频繁增删的场景。

    ---

    ### 2. Set 接口
    #### 常用实现类：
    - **HashSet**
    - **LinkedHashSet**
    - **TreeSet**

    #### 功能：
    - 无序集合，不允许重复元素。

    #### 区别：
    - **HashSet**：
    - 基于哈希表实现。
    - 插入、删除、查询性能接近 O(1)。
    - 无序。
    - **LinkedHashSet**：
    - 基于哈希表和链表实现。
    - 保留插入顺序。
    - 性能略低于 HashSet。
    - **TreeSet**：
    - 基于红黑树实现。
    - 元素按自然顺序或自定义顺序排序。
    - 插入、删除、查询性能为 O(log n)。

    #### 性能：
    - **HashSet**：适合需要快速查找的场景。
    - **TreeSet**：适合需要排序的场景。

    ---

    ### 3. Queue 接口
    #### 常用实现类：
    - **LinkedList**（实现了 Queue 接口）
    - **PriorityQueue**
    - **ArrayDeque**

    #### 功能：
    - 队列，支持 FIFO 或优先级排序。

    #### 区别：
    - **LinkedList**：
    - 支持 FIFO 队列操作。
    - 性能与 LinkedList 一致。
    - **PriorityQueue**：
    - 基于堆实现。
    - 元素按优先级排序。
    - **ArrayDeque**：
    - 基于动态数组实现。
    - 支持双端队列操作。

    #### 性能：
    - **PriorityQueue**：适合需要优先级排序的场景。
    - **ArrayDeque**：适合需要高效队列操作的场景。

    ---

    ## 二、Map 接口
    Map 是键值对（Key-Value）集合，键不允许重复。

    ### 常用实现类：
    - **HashMap**
    - **LinkedHashMap**
    - **TreeMap**
    - **Hashtable**（已过时，不推荐使用）

    #### 功能：
    - 存储键值对，键不允许重复。

    #### 区别：
    - **HashMap**：
    - 基于哈希表实现。
    - 插入、删除、查询性能接近 O(1)。
    - 无序。
    - **LinkedHashMap**：
    - 基于哈希表和链表实现。
    - 保留插入顺序或访问顺序。
    - 性能略低于 HashMap。
    - **TreeMap**：
    - 基于红黑树实现。
    - 键按自然顺序或自定义顺序排序。
    - 插入、删除、查询性能为 O(log n)。
    - **Hashtable**：
    - 类似于 HashMap，但线程安全（性能较差）。
    - 已过时，推荐使用 `ConcurrentHashMap`。

    #### 性能：
    - **HashMap**：适合需要快速查找的场景。
    - **TreeMap**：适合需要排序的场景。

    ---

    ## 三、线程安全的集合类
    - **Vector**、**Hashtable**：已过时，不推荐使用。
    - **Collections.synchronizedXXX**：通过工具类包装非线程安全集合。
    - **CopyOnWriteArrayList**：适合读多写少的场景。
    - **CopyOnWriteArraySet**：基于 CopyOnWriteArrayList 实现。
    - **ConcurrentHashMap**：高并发场景下的 HashMap 替代方案。

    ---

    ## 四、总结
    | 集合类         | 特点                           | 适用场景                     | 性能（平均）       |
    |----------------|--------------------------------|------------------------------|--------------------|
    | ArrayList      | 动态数组，查询快               | 频繁查询                     | 查询 O(1)，增删 O(n) |
    | LinkedList     | 双向链表，增删快               | 频繁增删                     | 查询 O(n)，增删 O(1) |
    | HashSet        | 哈希表，无序                   | 快速查找、去重               | 插入、删除、查询 O(1) |
    | LinkedHashSet  | 哈希表 + 链表，保留插入顺序    | 需要保留插入顺序的去重       | 性能略低于 HashSet   |
    | TreeSet        | 红黑树，排序                   | 需要排序的去重               | 插入、删除、查询 O(log n) |
    | HashMap        | 哈希表，无序                   | 快速查找键值对               | 插入、删除、查询 O(1) |
    | LinkedHashMap  | 哈希表 + 链表，保留插入顺序    | 需要保留插入顺序的键值对     | 性能略低于 HashMap   |
    | TreeMap        | 红黑树，键排序                 | 需要排序的键值对             | 插入、删除、查询 O(log n) |
    | ConcurrentHashMap | 高并发哈希表                 | 高并发场景下的键值对存储     | 插入、删除、查询 O(1) |

    根据具体需求选择合适的集合类，可以显著提高程序性能。

## 并发相关的集合类  
??? answer "答案"
    在Java中，处理并发场景时，需要使用线程安全的集合类。Java提供了多种并发集合类，这些类在多线程环境下能够保证数据的一致性和性能。以下是常见的并发集合类及其特点：

    ---

    ## 一、并发集合类分类
    Java中的并发集合类主要分为以下几类：
    1. **并发 List**
    2. **并发 Set**
    3. **并发 Map**
    4. **并发 Queue**

    ---

    ## 二、并发 List
    ### 1. **CopyOnWriteArrayList**
    - **特点**：
    - 基于写时复制（Copy-On-Write）机制。
    - 每次修改操作（如添加、删除）都会创建一个新的数组副本。
    - 读操作不需要加锁，性能高。
    - **适用场景**：
    - 读多写少的场景。
    - 例如：监听器列表、缓存。
    - **性能**：
    - 读操作：O(1)。
    - 写操作：O(n)，因为需要复制数组。

    ---

    ## 三、并发 Set
    ### 1. **CopyOnWriteArraySet**
    - **特点**：
    - 基于 `CopyOnWriteArrayList` 实现。
    - 同样采用写时复制机制。
    - 不允许重复元素。
    - **适用场景**：
    - 读多写少的场景。
    - 例如：去重的监听器集合。
    - **性能**：
    - 读操作：O(1)。
    - 写操作：O(n)。

    ### 2. **ConcurrentSkipListSet**
    - **特点**：
    - 基于跳表（SkipList）实现。
    - 元素按自然顺序或自定义顺序排序。
    - 支持高并发的插入、删除和查询操作。
    - **适用场景**：
    - 需要排序的并发集合。
    - **性能**：
    - 插入、删除、查询操作：O(log n)。

    ---

    ## 四、并发 Map
    ### 1. **ConcurrentHashMap**
    - **特点**：
    - 高并发场景下的 HashMap 替代方案。
    - 采用分段锁（JDK 7）或 CAS + synchronized（JDK 8）实现。
    - 支持高并发的插入、删除和查询操作。
    - **适用场景**：
    - 高并发键值对存储。
    - 例如：缓存、计数器。
    - **性能**：
    - 插入、删除、查询操作：接近 O(1)。

    ### 2. **ConcurrentSkipListMap**
    - **特点**：
    - 基于跳表（SkipList）实现。
    - 键按自然顺序或自定义顺序排序。
    - 支持高并发的插入、删除和查询操作。
    - **适用场景**：
    - 需要排序的并发键值对存储。
    - **性能**：
    - 插入、删除、查询操作：O(log n)。

    ---

    ## 五、并发 Queue
    ### 1. **BlockingQueue 接口**
    - **特点**：
    - 支持阻塞操作的队列。
    - 当队列为空时，获取操作会被阻塞；当队列满时，插入操作会被阻塞。
    - **常用实现类**：
    - **ArrayBlockingQueue**：
        - 基于数组实现的有界阻塞队列。
    - **LinkedBlockingQueue**：
        - 基于链表实现的可选有界阻塞队列。
    - **PriorityBlockingQueue**：
        - 支持优先级排序的无界阻塞队列。
    - **SynchronousQueue**：
        - 不存储元素的阻塞队列，每个插入操作必须等待一个对应的删除操作。
    - **适用场景**：
    - 生产者-消费者模型。
    - **性能**：
    - 插入、删除操作：O(1)（取决于具体实现）。

    ### 2. **ConcurrentLinkedQueue**
    - **特点**：
    - 基于链表实现的无界非阻塞队列。
    - 使用 CAS 操作保证线程安全。
    - **适用场景**：
    - 高并发队列操作。
    - **性能**：
    - 插入、删除操作：O(1)。

    ### 3. **ConcurrentLinkedDeque**
    - **特点**：
    - 基于链表实现的无界非阻塞双端队列。
    - 支持从队列两端插入和删除元素。
    - **适用场景**：
    - 高并发双端队列操作。
    - **性能**：
    - 插入、删除操作：O(1)。

    ---

    ## 六、其他并发工具类
    ### 1. **ConcurrentNavigableMap**
    - **特点**：
    - 支持并发操作的导航 Map。
    - 实现类：`ConcurrentSkipListMap`。

    ### 2. **ConcurrentSkipListSet**
    - **特点**：
    - 基于 `ConcurrentSkipListMap` 实现的并发 Set。

    ---

    ## 七、总结
    | 集合类                 | 特点                                           | 适用场景                     | 性能（平均）       |
    |------------------------|------------------------------------------------|------------------------------|--------------------|
    | CopyOnWriteArrayList    | 写时复制，读多写少                             | 监听器列表、缓存             | 读 O(1)，写 O(n)    |
    | CopyOnWriteArraySet     | 基于 CopyOnWriteArrayList，去重                | 去重的监听器集合             | 读 O(1)，写 O(n)    |
    | ConcurrentHashMap       | 高并发键值对存储                               | 缓存、计数器                 | 接近 O(1)          |
    | ConcurrentSkipListMap   | 基于跳表，支持排序                             | 需要排序的并发键值对         | O(log n)           |
    | ConcurrentSkipListSet   | 基于 ConcurrentSkipListMap，去重               | 需要排序的并发集合           | O(log n)           |
    | ArrayBlockingQueue      | 基于数组的有界阻塞队列                         | 生产者-消费者模型            | O(1)               |
    | LinkedBlockingQueue     | 基于链表的可选有界阻塞队列                     | 生产者-消费者模型            | O(1)               |
    | PriorityBlockingQueue   | 支持优先级的无界阻塞队列                       | 需要优先级的任务调度         | O(log n)           |
    | ConcurrentLinkedQueue   | 基于链表的无界非阻塞队列                       | 高并发队列操作               | O(1)               |
    | ConcurrentLinkedDeque   | 基于链表的无界非阻塞双端队列                   | 高并发双端队列操作           | O(1)               |

    ---

    ## 八、选择建议
    1. **读多写少**：使用 `CopyOnWriteArrayList` 或 `CopyOnWriteArraySet`。
    2. **高并发键值对存储**：使用 `ConcurrentHashMap`。
    3. **需要排序的并发集合**：使用 `ConcurrentSkipListMap` 或 `ConcurrentSkipListSet`。
    4. **生产者-消费者模型**：使用 `BlockingQueue` 的实现类（如 `ArrayBlockingQueue` 或 `LinkedBlockingQueue`）。
    5. **高并发队列操作**：使用 `ConcurrentLinkedQueue` 或 `ConcurrentLinkedDeque`。

    根据具体需求选择合适的并发集合类，可以显著提高多线程程序的性能和可靠性。


## HashMap内部的具体实现
??? answer "答案"
    **简介**

        HashMap 是一散列表，它存储的内容是键值对的映射。它根据键的hashCode值存储数据，大多数情况下可以直接定位到它的值，因而具有很快的访问速度，但遍历顺序确是不确定的。

    HashMap最多只允许一条记录的键为null，允许多条记录的值为null。

    HashMap使用hash算法进行数据的存储和查询，内部使用一个Entry表示键值对key-value。用Entry的数组保存所有键值对，Entry通过链表的方式链接后续的节点（1.8后会根据链表长度决定是否转换成红黑树），Entry通过计算key的hash值来决定映射到具体的哪个数组（也叫Bucket）中。

    HashMap非线程安全，即任一时刻可以有多个线程同时写HashMap，可能会导致数据的不一致，如果需要满足线程安全，可以用Collections的synchronizedMap方法使得HashMap具有线程安全的能力，或者使用ConcurrentHaspMap。

    **存储结构**
    HashMap是数组+链表+红黑树实现的。

    ```java
    public class HashMap<K,V> extends AbstractMap<K,V> implements Map<K,V>, Cloneable, Serializable {
        private static final long serialVersionUID = 362498820763181265L;
        /**
         * HashMap 的默认初始容量为 16，必须为 2 的 n 次方 (一定是合数)
         */
        static final int DEFAULT_INITIAL_CAPACITY = 1 << 4;

        /**
         * HashMap 的最大容量为 2 的 30 次幂
         */
        static final int MAXIMUM_CAPACITY = 1 << 30;        

        /**
         *  HashMap 的默认负载因子
         */
        static final float DEFAULT_LOAD_FACTOR = 0.75f;

        /**
         * 链表转成红黑树的阈值。即在哈希表扩容时，当链表的长度(桶中元素个数)超过这个值的时候，进行链表到红黑树的转变
         */
        static final int TREEIFY_THRESHOLD = 8;

        /**
         * 红黑树转为链表的阈值。即在哈希表扩容时，如果发现链表长度(桶中元素个数)小于 6，则会由红黑树重新退化为链表
         */
        static final int UNTREEIFY_THRESHOLD = 6;

        /**
         * HashMap 的最小树形化容量。这个值的意义是：位桶（bin）处的数据要采用红黑树结构进行存储时，整个Table的最小容量（存储方式由链表转成红黑树的容量的最小阈值）
         * 当哈希表中的容量大于这个值时，表中的桶才能进行树形化，否则桶内元素太多时会扩容，而不是树形化
         * 为了避免进行扩容、树形化选择的冲突，这个值不能小于 4 * TREEIFY_THRESHOLD
         */
        static final int MIN_TREEIFY_CAPACITY = 64;

        /**
         * Node 是 HashMap 的一个内部类，实现了 Map.Entry 接口，本质是就是一个映射 (键值对)
         * Basic hash bin node, used for most entries.
         */
        static class Node<K,V> implements Map.Entry<K,V> {
            final int hash; // 用来定位数组索引位置
            final K key;
            V value;
            Node<K,V> next; // 链表的下一个node

            Node(int hash, K key, V value, Node<K,V> next) { ... }

            public final K getKey()        { ... }
            public final V getValue()      { ... }
            public final String toString() { ... }
            public final int hashCode() { ... }
            public final V setValue(V newValue) { ... }
            public final boolean equals(Object o) { ... }
        }

        /**
         * 哈希桶数组，分配的时候，table的长度总是2的幂
         */
        transient Node<K,V>[] table;

        /**
         * Holds cached entrySet(). Note that AbstractMap fields are used
         * for keySet() and values().
         */
        transient Set<Map.Entry<K,V>> entrySet;

        /**
         * HashMap 中实际存储的 key-value 键值对数量
         */
        transient int size;

        /**
         * 用来记录 HashMap 内部结构发生变化的次数，主要用于迭代的快速失败机制
         */
        transient int modCount;

        /**
         * HashMap 的门限阀值/扩容阈值，所能容纳的 key-value 键值对极限，当size>=threshold时，就会扩容
         * 计算方法：容量capacity * 负载因子load factor    
         */
        int threshold;

        /**
         * HashMap 的负载因子
         */
        final float loadFactor;
    }

    作者：野狗子嗷嗷嗷
    链接：https://www.jianshu.com/p/b40fd341711e
    來源：简书
    简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
    ```

    Node[] table的初始化长度是16，负载因子默认是0.75，threshold是HashMap所能容纳的最大键值对。threshold=length*loadFactor，也就是说当HashMap存储的元素数量大于threshold时，HashMap就会进行扩容的操作。

    size这个字段其实很好理解，就是HashMap中实际存在的键值对数量。而modCount字段主要用来记录HashMap内部结构发生变化的次数，主要用于迭代的快速失败。

    在HashMap中，哈希桶数组table的长度length大小必须为2的n次方，这是一种非常规的设计，常规的设计是把桶的大小设计为素数，相对来说，素数导致冲突的概率要小。HashTable初始化桶大小为11，这就是桶大小设计为素数的应用（HashTable扩容后不能保证还是素数）。HashMap采用这种非常规的设计，主要是为了在取模和扩容时做优化，同时为了减少冲突，HashMap定位哈希桶索引位置时，也加入了高位参与运算的过程。

    **功能实现**

    解决Hash冲突的hash()方法：

    HashMap的hash计算时先计算hashCode()，然后进行二次hash。

    ```java
    // 计算二次Hash
    int hash = hash(key.hashCode());

    // 通过Hash找数组索引
    int i = hash & (tab.length-1);

    static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
    ```

    它总是通过h&(table.length-1)来得到该对象的保存位置，而HashMap底层数组的长度总是2的n次方，这样保证了计算得到的索引值总是位于table数组的索引之内。

    **put方法**

    1. 对key的hashCode做hash，然后计算index
    2. 如果没碰撞，就直接放到bucket里，如果碰撞了，以链表的形式存在buckets后
    3. 如果碰撞导致链表过长（大于等于TREEIFY_THRESHOLD=8），就把链表转换为红黑树
    4. 如果节点已经存在，就替换，保证key的唯一性
    5. 如果bucket满了（超过loadFactor*currentCapacity），就要resize

    具体步骤：

    1. 如果table没有使用过的情况，（tab=table）==null||(n=length)==0，则以默认大小进行一次resize
    2. 计算key的hash值，然后获取底层table数组的第（n-1）&hash的位置的数组索引tab[i]处的数据，即hash对n取模的位置，依赖的是n为2的次方的这一条件
    3. 先检查该bucket第一个元素是否是和插入的key相等（如果是同一个对象则肯定equals）
    4. 如果不相等并且是TreeNode的情况，调用TreeNode的put方法
    5. 否则循环遍历链表，如果找到相等的key跳出循环否则达到最后一个节点时将新的节点添加到链表最后，当前面找到了相同的key的情况下替换这个节点的value为新的value
    6. 如果新增了key-value对，则增加size并且判断是否超过了threshold，如果超过了则需要进行resize扩容

    ```java
    public V put(K key, V value) {
        // 对key的hashCode()做hash
        return putVal(hash(key), key, value, false, true);
    }

    /**
     * Implements Map.put and related methods
     *
     * @param hash hash for key
     * @param key the key
     * @param value the value to put
     * @param onlyIfAbsent if true, don't change existing value
     * @param evict if false, the table is in creation mode.
     * @return previous value, or null if none
     */
    final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
                    boolean evict) {
        Node<K,V>[] tab; Node<K,V> p; int n, i;
        // table为空或者length=0时，以默认大小扩容，n为table的长度    
        if ((tab = table) == null || (n = tab.length) == 0)
            n = (tab = resize()).length;
        // 计算index，并对null做处理，table[i]==null
        if ((p = tab[i = (n - 1) & hash]) == null)
            // (n-1)&hash 与Java7中indexFor方法的实现相同，若i位置上的值为空，则新建一个Node，table[i]指向该Node。
            // 直接插入
            tab[i] = newNode(hash, key, value, null);
        else {
            // 若i位置上的值不为空，判断当前位置上的Node p 是否与要插入的key的hash和key相同
            Node<K,V> e; K k;
            // 若节点key存在，直接覆盖value
            if (p.hash == hash &&
                ((k = p.key) == key || (key != null && key.equals(k))))
                e = p;
            // 判断table[i]该链是否是红黑树，如果是红黑树，则直接在树中插入键值对
            else if (p instanceof TreeNode)
                // 不同，且当前位置上的的node p已经是TreeNode的实例，则再该树上插入新的node
                e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
            // table[i]该链是普通链表，进行链表的插入操作
            else {
                // 在i位置上的链表中找到p.next为null的位置，binCount计算出当前链表的长度，如果继续将冲突的节点插入到该链表中，会使链表的长度大于tree化的阈值，则将链表转换成tree。
                for (int binCount = 0; ; ++binCount) {
                    // 如果遍历到了最后一个节点，说明没有匹配的key，则创建一个新的节点并添加到最后
                    if ((e = p.next) == null) {
                        p.next = newNode(hash, key, value, null);
                        // 链表长度大于8转换为红黑树进行处理
                        if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                            treeifyBin(tab, hash);
                        break;
                    }
                    // 遍历过程中若发现 key 已经存在直接覆盖 value 并跳出循环即可
                    if (e.hash == hash &&
                        ((k = e.key) == key || (key != null && key.equals(k))))
                        break;
                    p = e;
                }
            }
            // 已经存在该key的情况时，将对应的节点的value设置为新的value
            if (e != null) { // existing mapping for key
                V oldValue = e.value;
                if (!onlyIfAbsent || oldValue == null)
                    e.value = value;
                afterNodeAccess(e);
                return oldValue;
            }
        }
        ++modCount;
        // 插入成功后，判断实际存在的键值对数量 size 是否超多了最大容量 threshold，如果超过，进行扩容
        if (++size > threshold)
            resize();
        afterNodeInsertion(evict);
        return null;
    }

    ```

    **get方法**
    get(key)方法时获取key的hash值，计算hash&(n-1)得到在链表数组中的位置first=tab[hash&(n-1)]，先判断first的key是否是参数key相等，不等就遍历后面的链表找到相同的key值返回对应的value值即可。

    ```java
    public V get(Object key) {
        Node<K,V> e;
        return (e = getNode(hash(key), key)) == null ? null : e.value;
    }

    // 根据哈希表元素个数与哈希值求模（使用的公式是 (n - 1) &hash）得到 key 所在的桶的头结点，如果头节点恰好是红黑树节点，就调用红黑树节点的 getTreeNode() 方法，否则就遍历链表节点
    final Node<K,V> getNode(int hash, Object key) {
        Node<K,V>[] tab; Node<K,V> first, e; int n; K k;
        if ((tab = table) != null && (n = tab.length) > 0 &&
            (first = tab[(n - 1) & hash]) != null) {
            if (first.hash == hash && // always check first node
                ((k = first.key) == key || (key != null && key.equals(k))))
                return first;
            if ((e = first.next) != null) {
                if (first instanceof TreeNode)
                    return ((TreeNode<K,V>)first).getTreeNode(hash, key);
                do {
                    if (e.hash == hash &&
                        ((k = e.key) == key || (key != null && key.equals(k))))
                        return e;
                } while ((e = e.next) != null);
            }
        }
        return null;
    }

    ```

    **resize方法**
    扩容就是重新计算容量，向HashMap对象里不停的添加元素，而HashMap对象内部的数组无法装载更多的元素时，对象就需要扩大数组的长度，以便能装入更多的元素。当然Java里的数组是无法自动扩容的，方法是使用一个新的数组代替已有的容量小的数组。

    具体步骤：

    1. 首先计算resize()后的新的capacity和threshold，如果原有的capacity大于零，则将capacity增加一倍，否则设置成默认的capacity
    2. 创建新的数组，大小是新的capacity
    3. 将旧的数组元素放置到新数组中

    ```java
    final Node<K,V>[] resize() {
        // 将字段引用copy到局部变量表，这样在之后的使用时可以减少getField指令的调用
        Node<K,V>[] oldTab = table;
        // oldCap为原数组的大小或当空时为0
        int oldCap = (oldTab == null) ? 0 : oldTab.length;
        int oldThr = threshold;
        int newCap, newThr = 0;
        if (oldCap > 0) {
            if (oldCap >= MAXIMUM_CAPACITY) {
                // 如果超过最大容量1>>30，无法再扩充table，只能改变阈值
                threshold = Integer.MAX_VALUE;
                return oldTab;
            }
            // 新的数组的大小是旧数组的两倍
            else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                        oldCap >= DEFAULT_INITIAL_CAPACITY)
                // 当旧的的数组大小大于等于默认大小时，threshold也扩大一倍
                newThr = oldThr << 1;
        }
        else if (oldThr > 0) // initial capacity was placed in threshold
            newCap = oldThr;
        else {               // zero initial threshold signifies using defaults
            // 初始化操作
            newCap = DEFAULT_INITIAL_CAPACITY;
            newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
        }
        if (newThr == 0) {
            float ft = (float)newCap * loadFactor;
            newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                        (int)ft : Integer.MAX_VALUE);
        }
        threshold = newThr;
        @SuppressWarnings({"rawtypes","unchecked"})
        // 创建容量为newCap的newTab，并将oldTab中的Node迁移过来，这里需要考虑链表和tree两种情况。
        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
        table = newTab;
        // 将原数组中的数组复制到新数组中
        if (oldTab != null) {
            for (int j = 0; j < oldCap; ++j) {
                Node<K,V> e;
                if ((e = oldTab[j]) != null) {
                    oldTab[j] = null;
                    if (e.next == null)
                        // 如果e是该bucket唯一的一个元素，则直接赋值到新数组中
                        newTab[e.hash & (newCap - 1)] = e;
                    else if (e instanceof TreeNode)
                        // split方法会将树分割为lower 和upper tree两个树，如果子树的节点数小于了UNTREEIFY_THRESHOLD阈值，则将树untreeify，将节点都存放在newTab中。
                        // TreeNode的情况则使用TreeNode中的split方法将这个树分成两个小树
                        ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                    else { // preserve order 保持顺序
                        // 否则则创建两个链表用来存放要放的数据，hash值&oldCap为0的(即oldCap的1的位置的和hash值的同样的位置都是1，同样是基于capacity是2的次方这一前提)为low链表，反之为high链表, 通过这种方式将旧的数据分到两个链表中再放到各自对应余数的位置
                        Node<K,V> loHead = null, loTail = null;
                        Node<K,V> hiHead = null, hiTail = null;
                        Node<K,V> next;
                        do {
                            next = e.next;
                            // 按照e.hash值区分放在loTail后还是hiTail后
                            if ((e.hash & oldCap) == 0) {
                                // 运算结果为0的元素，用lo记录并连接成新的链表
                                if (loTail == null)
                                    loHead = e;
                                else
                                    loTail.next = e;
                                loTail = e;
                            }
                            else {
                                // 运算结果不为0的数据，用li记录
                                if (hiTail == null)
                                    hiHead = e;
                                else
                                    hiTail.next = e;
                                hiTail = e;
                            }
                        } while ((e = next) != null);
                        // 处理完之后放到新数组中
                        if (loTail != null) {
                            loTail.next = null;
                            // lo仍然放在“原处”，这个“原处”是根据新的hash值算出来的
                            newTab[j] = loHead;
                        }
                        if (hiTail != null) {
                            hiTail.next = null;
                            // li放在j+oldCap位置
                            newTab[j + oldCap] = hiHead;
                        }
                    }
                }
            }
        }
        return newTab;
    }

    ```

    **size方法**
    HashMap的大小很简单，不是实时计算的，而是每次新增加Entry的时候，size就递增。删除的时候就递减，空间换时间的做法，因为它不是线程安全的，完全可以这么做，效率高。

    **面试问题**

    **1. 构造函数中initialCapacity与loadFactor两个参数**
    ​	HashMap(int initialCapacity,float loadFactor)：构造一个指定容量和负载因子的空HashMap。

    这两个参数是影响HashMap性能的重要参数，其中容量表示哈希表中桶的数量，初始容量是创建哈希表时的容量，负载因子是哈希表在其容量增加之前可以达到多满的一种尺度，它衡量的是一个散列表的空间的使用程度，负载因子越大表示散列表的填充程度越高，反之越小。

    **2. size为什么必须是2的整数次幂**
    ​	这是为了服务key映射到index的hash算法的，公式 index=hashcode(key)&(length-1)。HashMap中数组的size必须是2的幂，是为了将key的hash值均匀的分布在数组的索引上。HashMap中使用indexFor方法来计算key所在的数组的索引，实现逻辑为key的hash值与数组长度值减一进行与运算，代码如下：

    ```java
        static int indexFor(int h, int length) {
            return h & (length - 1);
        }
    ```

    **3. HashMap的key为什么一般用字符串比较多，能用其他对象，或者自定义的对象嘛？**
    ​	能用其他对象，必须是不可变的，但是自实现的类必须重写equals()和hashCode()方法，否则会调用默认的Object类的对应方法。

    **4. HashMap的key和value都能为null嘛？如果key为null，那么它是怎么样查找值的？**
    ​	如果key为null，则直接从哈希表的第一个位置table[0]对应的链表上查找，由putForNullKey()实现，记住，key为null的键值对永远都放在以table[0]为头节点的链表中。

    **5. 使用HashMap时一般使用什么类型的元素作为Key？**
    ​	一般是String、Integer，这些类是不可变的，并且这些类已经规范的复写了hashCode以及equals方法，作为不可变类天生是线程安全的，而且可以很好的优化比如可以缓存hash值，避免重复计算等等。

    **6. HashTable和HashMap的区别有哪些？**
    ​	都实现了Map接口，主要区别在于：线程安全性，同步以及性能。

    - HashMap是非线程安全的，效率肯定高于线程安全的HashTable
    - HashMap允许null作为一个entry的key或者value，而HashTable不允许
    - HashMap把HashTable的contains方法去掉了，改成了containsVaule和containsKey
    - HashTable和HashMap扩容的方法不一样，HashTable中的hash数组默认大小是11，扩容方式是old x 2+1，而HashMap中hash数组的默认大小是16，而且一定是2的指数，扩容时old x 2



## hashmap和hashtable的区别
??? answer "答案"
    在Java中，`HashMap`和`Hashtable`都是用于存储键值对的集合类，但它们在实现和特性上有显著区别。以下是它们的主要差异及源码层面的解释：

    ### 1. 线程安全性
    - **Hashtable**：是线程安全的，所有方法都使用`synchronized`关键字修饰，确保多线程环境下的安全性。
    - **HashMap**：不是线程安全的，没有使用`synchronized`修饰，因此在多线程环境下需要额外同步。

    #### 源码示例
    - **Hashtable**：
    ```java
    public synchronized V put(K key, V value) {
        // 具体实现
    }
    ```
    `put`方法使用`synchronized`修饰，确保线程安全。

    - **HashMap**：
    ```java
    public V put(K key, V value) {
        // 具体实现
    }
    ```
    `put`方法没有`synchronized`修饰，不保证线程安全。

    ### 2. 允许null键和null值
    - **Hashtable**：不允许`null`键或`null`值，否则会抛出`NullPointerException`。
    - **HashMap**：允许一个`null`键和多个`null`值。

    #### 源码示例
    - **Hashtable**：
    ```java
    public synchronized V put(K key, V value) {
        if (value == null) {
            throw new NullPointerException();
        }
        // 具体实现
    }
    ```
    在`put`方法中，如果`value`为`null`，直接抛出异常。

    - **HashMap**：
    ```java
    public V put(K key, V value) {
        // 允许null键和null值
        return putVal(hash(key), key, value, false, true);
    }
    ```
    `HashMap`没有对`null`键或值的限制。

    ### 3. 性能
    - **Hashtable**：由于方法同步，性能较低。
    - **HashMap**：没有同步开销，性能较高。

    ### 4. 继承与实现
    - **Hashtable**：继承自`Dictionary`类。
    - **HashMap**：继承自`AbstractMap`类。

    #### 源码示例
    - **Hashtable**：
    ```java
    public class Hashtable<K,V> extends Dictionary<K,V> implements Map<K,V>, Cloneable, Serializable {
        // 具体实现
    }
    ```

    - **HashMap**：
    ```java
    public class HashMap<K,V> extends AbstractMap<K,V> implements Map<K,V>, Cloneable, Serializable {
        // 具体实现
    }
    ```

    ### 5. 迭代器
    - **Hashtable**：使用`Enumeration`进行遍历。
    - **HashMap**：使用`Iterator`进行遍历。

    #### 源码示例
    - **Hashtable**：
    ```java
    public Enumeration<K> keys() {
        return this.<K>getEnumeration(KEYS);
    }
    ```

    - **HashMap**：
    ```java
    public Set<K> keySet() {
        Set<K> ks = keySet;
        if (ks == null) {
            ks = new KeySet();
            keySet = ks;
        }
        return ks;
    }
    ```

    ### 总结
    - **Hashtable**：线程安全，不允许`null`键值，性能较低，使用`Enumeration`遍历。
    - **HashMap**：非线程安全，允许`null`键值，性能较高，使用`Iterator`遍历。

    这些差异使得`HashMap`在单线程环境下更高效，而`Hashtable`在多线程环境下更安全。


## hashmap和hashtable存储细节区别
??? answer "答案"
    而 `Hashtable` 由于其线程安全性和性能问题，逐渐被 `ConcurrentHashMap` 取代。
    `HashMap` 和 `Hashtable` 的内部数据存储结构在核心思想上是相似的，都是基于 **哈希表（Hash Table）** 实现的，使用了 **Bucket（桶）** 的概念来存储数据。然而，它们的实现细节和优化方式有所不同，尤其是在 Java 8 之后，`HashMap` 引入了 **红黑树** 来优化性能，而 `Hashtable` 则没有这样的改进。

    以下是对它们内部数据存储结构的详细分析：

    ---

    ### 1. **共同点：Bucket 和链表**
    - **Bucket（桶）**：
    - 两者都使用一个数组（`table`）来存储数据，数组的每个元素称为一个 **Bucket**。
    - 每个 Bucket 存储的是一个链表（或红黑树）的头节点，用于解决哈希冲突（即多个键映射到同一个 Bucket 的情况）。

    - **链表**：
    - 当发生哈希冲突时，键值对会以链表的形式存储在同一个 Bucket 中。
    - 链表中的每个节点是一个 `Entry`（在 `Hashtable` 中）或 `Node`（在 `HashMap` 中），存储键、值以及下一个节点的引用。

    #### 源码示例
    - **Hashtable**：
    ```java
    private static class Entry<K,V> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        V value;
        Entry<K,V> next; // 链表的下一个节点
    }
    ```

    - **HashMap**：
    ```java
    static class Node<K,V> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next; // 链表的下一个节点
    }
    ```

    ---

    ### 2. **不同点：红黑树的引入**
    - **HashMap（Java 8 及之后）**：
    - 在 Java 8 中，`HashMap` 引入了 **红黑树** 来优化性能。
    - 当链表的长度超过一定阈值（默认是 8），链表会转换为红黑树，从而将查找时间复杂度从 `O(n)` 降低到 `O(log n)`。
    - 当红黑树的节点数减少到一定阈值（默认是 6），红黑树会退化为链表。

    #### 源码示例
    ```java
    static final class TreeNode<K,V> extends LinkedHashMap.Entry<K,V> {
        TreeNode<K,V> parent;  // 红黑树的父节点
        TreeNode<K,V> left;    // 左子节点
        TreeNode<K,V> right;   // 右子节点
        TreeNode<K,V> prev;    // 前驱节点
        boolean red;           // 节点颜色
    }
    ```

    - **Hashtable**：
    - `Hashtable` 没有引入红黑树的优化，仍然只使用链表来处理哈希冲突。
    - 因此，在极端情况下（如大量哈希冲突），`Hashtable` 的性能会显著下降。

    ---

    ### 3. **扩容机制**
    - **HashMap**：
    - 默认初始容量是 16，负载因子是 0.75。
    - 当元素数量超过 `容量 * 负载因子` 时，`HashMap` 会进行扩容（容量翻倍）。
    - 扩容时，会重新计算每个键值对的哈希值，并重新分配到新的 Bucket 中。

    #### 源码示例
    ```java
    final Node<K,V>[] resize() {
        // 扩容逻辑
    }
    ```

    - **Hashtable**：
    - 默认初始容量是 11，负载因子是 0.75。
    - 扩容时，容量变为 `旧容量 * 2 + 1`。
    - 扩容机制与 `HashMap` 类似，但计算新容量的方式不同。

    #### 源码示例
    ```java
    protected void rehash() {
        // 扩容逻辑
    }
    ```

    ---

    ### 4. **哈希函数**
    - **HashMap**：
    - 使用更复杂的哈希函数来减少哈希冲突。
    - 在 Java 8 中，`HashMap` 对键的哈希值进行了二次处理（扰动函数），以进一步分散哈希值。

    #### 源码示例
    ```java
    static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
    ```

    - **Hashtable**：
    - 直接使用键的 `hashCode()`，没有额外的扰动处理。
    - 因此，`Hashtable` 的哈希冲突概率可能更高。

    #### 源码示例
    ```java
    int hash = key.hashCode();
    ```

    ---

    ### 5. **总结：内部数据存储的异同**
    | 特性                | HashMap                          | Hashtable                       |
    |---------------------|----------------------------------|---------------------------------|
    | **Bucket 结构**      | 数组 + 链表/红黑树                | 数组 + 链表                     |
    | **红黑树优化**       | 支持（链表长度 > 8 时转换）        | 不支持                          |
    | **哈希函数**         | 二次哈希（扰动函数）               | 直接使用 `hashCode()`           |
    | **扩容机制**         | 容量翻倍                         | 容量变为 `旧容量 * 2 + 1`       |
    | **初始容量**         | 16                               | 11                              |
    | **负载因子**         | 0.75                             | 0.75                            |

    ---

    ### 结论
    - **相同点**：
    - 两者都使用 Bucket（数组）和链表来存储数据。
    - 都通过链表解决哈希冲突。
    - **不同点**：
    - `HashMap` 在 Java 8 引入了红黑树优化，而 `Hashtable` 没有。
    - `HashMap` 的哈希函数更复杂，减少了哈希冲突的概率。
    - `HashMap` 的扩容机制更高效（容量翻倍），而 `Hashtable` 的扩容机制较简单。

    因此，`HashMap` 在现代 Java 开发中更常用，而 `Hashtable` 由于其线程安全性和性能问题，逐渐被 `ConcurrentHashMap` 取代。


## 一个类的equals hashCode会如何影响到HashMap的存储？
??? answer "答案"
    是的，一个类的 `equals` 和 `hashCode` 方法会直接影响 `HashMap` 的存储和性能。这是因为 `HashMap` 依赖于这两个方法来定位键值对、解决哈希冲突以及确保键的唯一性。

    ---

    ### 1. **`hashCode` 方法的影响**
    `hashCode` 方法用于计算键的哈希值，`HashMap` 使用这个哈希值来确定键值对存储在哪个 Bucket（桶）中。

    #### 影响：
    - **哈希冲突**：
    - 如果 `hashCode` 实现不好（例如，总是返回相同的值），会导致所有键值对都存储在同一个 Bucket 中，形成一条长链表或红黑树。
    - 这会显著降低 `HashMap` 的性能，因为查找、插入和删除操作的时间复杂度会从 `O(1)` 退化为 `O(n)` 或 `O(log n)`。

    - **分布均匀性**：
    - 一个好的 `hashCode` 实现应该尽可能均匀地分布键的哈希值，以减少哈希冲突。
    - 例如，`String` 类的 `hashCode` 实现就非常优秀，能够很好地分散哈希值。

    #### 示例：
    ```java
    class BadKey {
        private int id;

        public BadKey(int id) {
            this.id = id;
        }

        @Override
        public int hashCode() {
            return 1; // 总是返回相同的哈希值
        }
    }

    public class Main {
        public static void main(String[] args) {
            Map<BadKey, String> map = new HashMap<>();
            for (int i = 0; i < 100; i++) {
                map.put(new BadKey(i), "Value" + i);
            }
            // 所有键值对都会存储在同一个 Bucket 中，形成一条长链表
        }
    }
    ```

    ---

    ### 2. **`equals` 方法的影响**
    `equals` 方法用于比较两个键是否相等。`HashMap` 使用 `equals` 方法来确保键的唯一性，并在哈希冲突时找到正确的键值对。

    #### 影响：
    - **键的唯一性**：
    - 如果 `equals` 实现不正确，可能会导致 `HashMap` 无法正确识别重复的键。
    - 例如，如果 `equals` 总是返回 `false`，`HashMap` 会认为每个键都是唯一的，即使它们的实际内容相同。

    - **查找性能**：
    - 在哈希冲突的情况下，`HashMap` 需要遍历链表或红黑树，并使用 `equals` 方法逐个比较键。
    - 如果 `equals` 实现不好（例如，总是返回 `false`），会导致查找性能下降。

    #### 示例：
    ```java
    class BadKey {
        private int id;

        public BadKey(int id) {
            this.id = id;
        }

        @Override
        public boolean equals(Object obj) {
            return false; // 总是返回 false
        }

        @Override
        public int hashCode() {
            return id;
        }
    }

    public class Main {
        public static void main(String[] args) {
            Map<BadKey, String> map = new HashMap<>();
            BadKey key1 = new BadKey(1);
            BadKey key2 = new BadKey(1);

            map.put(key1, "Value1");
            map.put(key2, "Value2");

            System.out.println(map.size()); // 输出 2，因为 equals 总是返回 false
        }
    }
    ```

    ---

    ### 3. **`equals` 和 `hashCode` 的协作**
    `HashMap` 要求 `equals` 和 `hashCode` 方法必须遵循以下规则：
    1. **一致性**：
    - 如果两个对象通过 `equals` 比较相等，那么它们的 `hashCode` 必须相等。
    - 如果两个对象的 `hashCode` 相等，它们不一定需要通过 `equals` 比较相等（哈希冲突）。

    2. **必要性**：
    - 如果 `equals` 和 `hashCode` 不满足上述规则，`HashMap` 的行为将不可预测。

    #### 示例：
    ```java
    class GoodKey {
        private int id;

        public GoodKey(int id) {
            this.id = id;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (obj == null || getClass() != obj.getClass()) return false;
            GoodKey goodKey = (GoodKey) obj;
            return id == goodKey.id;
        }

        @Override
        public int hashCode() {
            return id; // 简单但有效的哈希码实现
        }
    }

    public class Main {
        public static void main(String[] args) {
            Map<GoodKey, String> map = new HashMap<>();
            GoodKey key1 = new GoodKey(1);
            GoodKey key2 = new GoodKey(1);

            map.put(key1, "Value1");
            map.put(key2, "Value2");

            System.out.println(map.size()); // 输出 1，因为 key1 和 key2 是相等的
        }
    }
    ```

    ---

    ### 4. **总结：`equals` 和 `hashCode` 对 `HashMap` 的影响**
    | 问题                        | 影响                                                                 |
    |-----------------------------|----------------------------------------------------------------------|
    | **`hashCode` 实现不好**       | 哈希冲突增加，性能下降（链表或红黑树过长）。                          |
    | **`equals` 实现不好**         | 无法正确识别重复键，导致键值对重复存储。                              |
    | **`equals` 和 `hashCode` 不一致** | `HashMap` 行为不可预测，可能无法正确查找或存储键值对。               |

    ---

    ### 5. **最佳实践**
    - 始终重写 `equals` 和 `hashCode` 方法，并确保它们满足一致性规则。
    - 使用 IDE（如 IntelliJ IDEA 或 Eclipse）自动生成 `equals` 和 `hashCode` 方法，避免手动实现错误。
    - 在 `hashCode` 实现中，尽量使用所有关键字段来计算哈希值，以减少冲突。

    通过正确实现 `equals` 和 `hashCode` 方法，可以确保 `HashMap` 的高效性和正确性。


## HashMap具体对Key和Value做了什么？
??? answer "答案"
    在Java中，`HashMap` 是一种基于哈希表的 `Map` 实现。当你向 `HashMap` 存入数据时，`HashMap` 会对 `Key` 和 `Value` 进行以下操作：

    ### 1. 对 `Key` 的处理：
    - **计算哈希值**：`HashMap` 首先会调用 `Key` 的 `hashCode()` 方法，计算其哈希值。这个哈希值用于确定 `Key` 在哈希表中的存储位置。
    
    - **处理哈希冲突**：如果两个不同的 `Key` 计算出的哈希值相同（即哈希冲突），`HashMap` 会使用链表或红黑树（在Java 8及以后）来处理冲突。具体来说，`HashMap` 会将具有相同哈希值的 `Key` 存储在同一个桶（bucket）中，形成一个链表或红黑树。

    - **检查是否已存在**：在插入之前，`HashMap` 会检查是否已经存在相同的 `Key`。它会调用 `Key` 的 `equals()` 方法来比较 `Key` 是否相等。如果 `Key` 已经存在，`HashMap` 会更新对应的 `Value`。

    ### 2. 对 `Value` 的处理：
    - **存储 `Value`**：`Value` 会被直接存储在哈希表中与 `Key` 对应的位置。`Value` 本身不需要进行哈希计算或任何特殊处理。

    - **更新 `Value`**：如果 `Key` 已经存在，`HashMap` 会用新的 `Value` 替换旧的 `Value`。

    ### 总结：
    - **`Key`**：`HashMap` 会对 `Key` 进行哈希计算，处理哈希冲突，并使用 `equals()` 方法检查 `Key` 是否已存在。
    - **`Value`**：`Value` 会被直接存储或更新，不需要进行额外的处理。

    ### 示例代码：
    ```java
    HashMap<String, Integer> map = new HashMap<>();
    map.put("apple", 10);  // Key: "apple", Value: 10
    map.put("banana", 20); // Key: "banana", Value: 20
    map.put("apple", 30);  // Key: "apple" 已存在，更新 Value 为 30
    ```

    在这个例子中：
    - 第一次插入 `"apple"` 时，`HashMap` 会计算 `"apple"` 的哈希值，并将其存储在哈希表中。
    - 第二次插入 `"banana"` 时，`HashMap` 会计算 `"banana"` 的哈希值，并将其存储在哈希表中。
    - 第三次插入 `"apple"` 时，`HashMap` 会发现 `"apple"` 已经存在，因此会更新对应的 `Value` 为 `30`。

    通过这种方式，`HashMap` 能够高效地存储和检索键值对。

## HashMap在Android上有没有替换的类？相比HashMap有哪些优势？
??? answer "答案"
    在 Android 开发中，如果需要替换 `HashMap`，通常会使用 **`ArrayMap`** 或 **`SparseArray`** 系列类。这些类是 Android 专门为移动设备优化过的数据结构，旨在减少内存占用并提高性能，特别是在处理小规模数据时。

    ---

    ## 一、HashMap 的问题
    在 Android 上，`HashMap` 虽然功能强大，但在某些场景下可能存在以下问题：
    1. **内存占用高**：
    - `HashMap` 使用数组 + 链表/红黑树的结构，需要额外的内存存储 Entry 对象和链表节点。
    - 每个键值对都需要一个 `Entry` 对象，增加了内存开销。
    2. **性能开销**：
    - 对于小规模数据，`HashMap` 的性能优势不明显，反而可能因为哈希冲突和对象创建带来额外开销。
    3. **自动装箱问题**：
    - 如果使用基本数据类型（如 `int`、`long`）作为键，`HashMap` 会将其自动装箱为 `Integer`、`Long` 等对象，增加了内存和性能开销。

    ---

    ## 二、Android 上的替代类

    ### 1. **ArrayMap**
    - **特点**：
    - 基于两个数组实现：一个数组存储键的哈希值，另一个数组存储键值对。
    - 内存占用比 `HashMap` 更小。
    - 适合小规模数据（通常少于 1000 个元素）。
    - **优势**：
    - 内存效率高：不需要额外的 `Entry` 对象。
    - 避免了自动装箱问题。
    - 在小数据量下，性能优于 `HashMap`。
    - **劣势**：
    - 数据量较大时，性能不如 `HashMap`（查找时间复杂度为 O(log n)）。
    - 不适合存储大量数据。
    - **适用场景**：
    - 小规模键值对存储。
    - 例如：Bundle、SharedPreferences 等。

    #### 示例代码：
    ```java
    ArrayMap<String, String> arrayMap = new ArrayMap<>();
    arrayMap.put("key1", "value1");
    arrayMap.put("key2", "value2");
    String value = arrayMap.get("key1");
    ```

    ---

    ### 2. **SparseArray**
    - **特点**：
    - 专门针对键为 `int` 类型的场景优化。
    - 使用两个数组：一个存储键（`int`），另一个存储值。
    - 避免了自动装箱问题。
    - **优势**：
    - 内存效率高：键为基本数据类型，不需要额外的对象。
    - 在小数据量下，性能优于 `HashMap`。
    - **劣势**：
    - 键只能是 `int` 类型。
    - 数据量较大时，性能不如 `HashMap`（查找时间复杂度为 O(log n)）。
    - **适用场景**：
    - 键为 `int` 类型的小规模键值对存储。
    - 例如：View 的 ID 映射。

    #### 示例代码：
    ```java
    SparseArray<String> sparseArray = new SparseArray<>();
    sparseArray.put(1, "value1");
    sparseArray.put(2, "value2");
    String value = sparseArray.get(1);
    ```

    ---

    ### 3. **SparseArray 的变种**
    - **SparseIntArray**：
    - 键为 `int`，值为 `int`。
    - **SparseLongArray**：
    - 键为 `int`，值为 `long`。
    - **SparseBooleanArray**：
    - 键为 `int`，值为 `boolean`。

    #### 示例代码：
    ```java
    SparseIntArray sparseIntArray = new SparseIntArray();
    sparseIntArray.put(1, 100);
    sparseIntArray.put(2, 200);
    int value = sparseIntArray.get(1);
    ```

    ---

    ### 4. **LongSparseArray**
    - **特点**：
    - 键为 `long` 类型的优化版本。
    - 类似于 `SparseArray`，但支持 `long` 类型的键。
    - **适用场景**：
    - 键为 `long` 类型的小规模键值对存储。

    #### 示例代码：
    ```java
    LongSparseArray<String> longSparseArray = new LongSparseArray<>();
    longSparseArray.put(1L, "value1");
    longSparseArray.put(2L, "value2");
    String value = longSparseArray.get(1L);
    ```

    ---

    ## 三、HashMap 与替代类的对比

    | 特性                | HashMap               | ArrayMap              | SparseArray           |
    |---------------------|-----------------------|-----------------------|-----------------------|
    | **键类型**          | 任意对象              | 任意对象              | `int`                 |
    | **值类型**          | 任意对象              | 任意对象              | 任意对象              |
    | **内存占用**        | 较高                  | 较低                  | 最低                  |
    | **查找性能**        | O(1)                 | O(log n)              | O(log n)              |
    | **插入性能**        | O(1)                 | O(n)                  | O(n)                  |
    | **删除性能**        | O(1)                 | O(n)                  | O(n)                  |
    | **适用场景**        | 大规模数据            | 小规模数据            | 小规模数据，键为 `int` |

    ---

    ## 四、选择建议
    1. **键为 `int` 类型**：
    - 使用 `SparseArray` 或其变种（如 `SparseIntArray`、`SparseLongArray`）。
    2. **键为 `long` 类型**：
    - 使用 `LongSparseArray`。
    3. **键为其他类型**：
    - 如果数据量较小，使用 `ArrayMap`。
    - 如果数据量较大，使用 `HashMap`。
    4. **需要高性能和大规模数据存储**：
    - 使用 `HashMap`。

    ---

    ## 五、总结
    在 Android 开发中，`ArrayMap` 和 `SparseArray` 是 `HashMap` 的轻量级替代方案，特别适合小规模数据存储和键为基本数据类型的场景。它们通过减少内存占用和避免自动装箱问题，提升了性能和效率。但在处理大规模数据时，`HashMap` 仍然是更合适的选择。根据具体需求选择合适的数据结构，可以显著优化应用的性能和内存使用。


## 请你用Java实现一个简易LRU算法
??? answer "答案"
    LRU（Least Recently Used）算法是一种常用的缓存淘汰策略，它会优先淘汰最近最少使用的数据。下面是一个使用Java实现的简易LRU算法，基于`LinkedHashMap`来实现。

    ```java
    import java.util.LinkedHashMap;
    import java.util.Map;

    public class LRUCache<K, V> extends LinkedHashMap<K, V> {
        private final int capacity;

        public LRUCache(int capacity) {
            // 设置accessOrder为true，使得LinkedHashMap按照访问顺序排序
            super(capacity, 0.75f, true);
            this.capacity = capacity;
        }

        @Override
        protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
            // 当缓存大小超过容量时，移除最久未使用的元素
            return size() > capacity;
        }

        public static void main(String[] args) {
            LRUCache<Integer, String> cache = new LRUCache<>(3);

            cache.put(1, "One");
            cache.put(2, "Two");
            cache.put(3, "Three");

            // 访问元素1，使其成为最近使用的元素
            System.out.println(cache.get(1)); // 输出: One

            // 插入新元素，导致元素2被淘汰
            cache.put(4, "Four");

            // 输出缓存内容
            cache.forEach((key, value) -> System.out.println(key + " -> " + value));
            // 输出:
            // 3 -> Three
            // 1 -> One
            // 4 -> Four
        }
    }
    ```

    ### 代码说明：
    1. **LinkedHashMap**：`LinkedHashMap`是`HashMap`的一个子类，它维护了一个双向链表来记录插入顺序或访问顺序。通过设置`accessOrder`为`true`，`LinkedHashMap`会按照访问顺序排序，最近访问的元素会被移动到链表的尾部。

    2. **removeEldestEntry**：重写`removeEldestEntry`方法，当缓存大小超过容量时，移除最久未使用的元素（即链表的头部元素）。

    3. **容量**：`capacity`表示缓存的最大容量，当缓存中的元素数量超过这个容量时，最久未使用的元素会被移除。

    ### 示例运行：
    在`main`方法中，我们创建了一个容量为3的LRU缓存，并进行了插入和访问操作。最后，缓存中的元素按照访问顺序排列，最久未使用的元素会被淘汰。

    ### 输出结果：
    ```plaintext
    One
    3 -> Three
    1 -> One
    4 -> Four
    ```

    这个简易的LRU实现适用于小规模的缓存场景。对于大规模并发场景，可能需要考虑更复杂的实现，如使用`ConcurrentHashMap`和自定义的双向链表来实现线程安全的LRU缓存。


## 讲一下LinkedHashMap这个数据结构，以及它在Android中的使用场景
??? answer "答案"
    ### LinkedHashMap 数据结构

    `LinkedHashMap` 是 Java 中的一个类，继承自 `HashMap`，并在其基础上维护了一个双向链表来记录插入顺序或访问顺序。这使得 `LinkedHashMap` 既能像 `HashMap` 一样高效地进行查找、插入和删除操作，又能保持元素的顺序。

    #### 主要特性：
    1. **顺序性**：
    - **插入顺序**：默认情况下，`LinkedHashMap` 按照元素插入的顺序进行迭代。
    - **访问顺序**：通过构造函数设置 `accessOrder` 为 `true`，`LinkedHashMap` 会按照元素的访问顺序（最近最少使用的顺序）进行迭代。

    2. **性能**：
    - 查找、插入和删除操作的时间复杂度为 O(1)，与 `HashMap` 相同。
    - 由于维护了双向链表，`LinkedHashMap` 的空间开销略高于 `HashMap`。

    3. **线程不安全**：
    - 与 `HashMap` 一样，`LinkedHashMap` 不是线程安全的。如果需要在多线程环境中使用，可以通过 `Collections.synchronizedMap` 进行包装。

    #### 构造方法：
    - `LinkedHashMap()`：创建一个空的 `LinkedHashMap`，默认按插入顺序排序。
    - `LinkedHashMap(int initialCapacity)`：指定初始容量。
    - `LinkedHashMap(int initialCapacity, float loadFactor)`：指定初始容量和负载因子。
    - `LinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder)`：指定初始容量、负载因子和排序方式（插入顺序或访问顺序）。

    ### 在 Android 中的使用场景

    1. **缓存实现**：
    - `LinkedHashMap` 可以用于实现 LRU（Least Recently Used）缓存。通过设置 `accessOrder` 为 `true`，`LinkedHashMap` 会自动将最近访问的元素移动到链表的末尾，而最久未使用的元素会位于链表的头部。结合 `removeEldestEntry` 方法，可以轻松实现一个固定大小的 LRU 缓存。

    ```java
    public class LRUCache<K, V> extends LinkedHashMap<K, V> {
        private final int capacity;

        public LRUCache(int capacity) {
            super(capacity, 0.75f, true);
            this.capacity = capacity;
        }

        @Override
        protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
            return size() > capacity;
        }
    }
    ```

    2. **保持插入顺序**：
    - 在需要保持元素插入顺序的场景中，`LinkedHashMap` 是一个理想的选择。例如，在 Android 开发中，如果需要将数据按插入顺序展示在 `RecyclerView` 或 `ListView` 中，可以使用 `LinkedHashMap` 来存储数据。

    3. **数据去重**：
    - 如果需要去重并保持顺序，`LinkedHashMap` 可以替代 `HashSet`。例如，从网络或数据库中获取数据时，可以使用 `LinkedHashMap` 来存储去重后的数据，并保持插入顺序。

    4. **自定义缓存策略**：
    - 除了 LRU 缓存，`LinkedHashMap` 还可以用于实现其他自定义的缓存策略。通过重写 `removeEldestEntry` 方法，可以根据业务需求定义缓存淘汰规则。

    ### 总结

    `LinkedHashMap` 是一个功能强大的数据结构，结合了 `HashMap` 的高效性和链表的顺序性。在 Android 开发中，它常用于实现缓存、保持数据顺序以及去重等场景。通过灵活使用 `LinkedHashMap`，可以简化代码并提高应用的性能。


## 