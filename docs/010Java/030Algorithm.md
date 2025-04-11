# 算法 

## 快速排序有什么特点？
??? answer "答案"
    快速排序（Quick Sort）是一种高效的排序算法，具有以下特点：

    ### 特点：
    1. **时间复杂度**：
    - **平均情况**：O(n log n)
    - **最坏情况**：O(n²)（当每次选择的基准元素导致极度不平衡的分割时）
    - **最好情况**：O(n log n)

    2. **空间复杂度**：
    - **平均情况**：O(log n)（递归栈的深度）
    - **最坏情况**：O(n)（递归栈的深度）

    3. **稳定性**：
    - 快速排序是不稳定的排序算法，因为相等的元素可能会因为交换而改变相对顺序。

    4. **分治法**：
    - 快速排序采用分治法（Divide and Conquer）策略，将问题分解为较小的子问题来解决。

    5. **原地排序**：
    - 快速排序是原地排序算法，不需要额外的存储空间（除了递归栈）。

    6. **基准元素选择**：
    - 快速排序的性能高度依赖于基准元素的选择。常见的策略包括选择第一个元素、最后一个元素、中间元素或随机元素作为基准。

    ### Java 实现：

    ```java
    public class QuickSort {

        public static void quickSort(int[] arr, int low, int high) {
            if (low < high) {
                // 找到分区点
                int pi = partition(arr, low, high);

                // 递归排序左半部分
                quickSort(arr, low, pi - 1);

                // 递归排序右半部分
                quickSort(arr, pi + 1, high);
            }
        }

        private static int partition(int[] arr, int low, int high) {
            int pivot = arr[high]; // 选择最后一个元素作为基准
            int i = (low - 1); // 较小元素的索引

            for (int j = low; j < high; j++) {
                // 如果当前元素小于或等于基准
                if (arr[j] <= pivot) {
                    i++;

                    // 交换 arr[i] 和 arr[j]
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

            // 交换 arr[i+1] 和基准元素 arr[high]
            int temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;

            return i + 1;
        }

        public static void main(String[] args) {
            int[] arr = {10, 7, 8, 9, 1, 5};
            int n = arr.length;

            quickSort(arr, 0, n - 1);

            System.out.println("排序后的数组:");
            for (int i : arr) {
                System.out.print(i + " ");
            }
        }
    }
    ```

    ### 代码说明：
    1. **quickSort 方法**：
    - 这是递归实现的核心方法，负责对数组进行排序。
    - `low` 和 `high` 分别表示当前子数组的起始和结束索引。

    2. **partition 方法**：
    - 该方法负责将数组分为两部分，并返回基准元素的正确位置。
    - 选择最后一个元素作为基准（`pivot`），然后将小于等于基准的元素放在左边，大于基准的元素放在右边。

    3. **main 方法**：
    - 这是程序的入口，初始化一个数组并调用 `quickSort` 方法进行排序。

    ### 总结：
    快速排序是一种高效的排序算法，尤其适用于大规模数据集。它的平均时间复杂度为 O(n log n)，但在最坏情况下会退化为 O(n²)。通过合理选择基准元素，可以显著提高算法的性能。


## 如何深刻记住快速排序代码，以及可能存在的变种算法题？
??? answer "答案"
    要深刻记住快速排序的代码并掌握其变种算法题，可以从以下几个方面入手：

    ---

    ### 1. **理解核心思想**
    快速排序的核心思想是 **分治法** 和 **分区操作**：
    - **分治法**：将问题分解为更小的子问题，递归解决。
    - **分区操作**：选择一个基准元素（pivot），将数组分为两部分，左边小于等于基准，右边大于基准。

    **关键点**：
    - 分区操作是快速排序的核心。
    - 递归地对左右两部分进行排序。

    ---

    ### 2. **记住代码模板**
    通过反复练习和记忆代码模板，可以加深对快速排序的理解。以下是 Java 的经典实现：

    ```java
    public class QuickSort {

        public static void quickSort(int[] arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high); // 分区操作
                quickSort(arr, low, pi - 1);  // 递归排序左半部分
                quickSort(arr, pi + 1, high); // 递归排序右半部分
            }
        }

        private static int partition(int[] arr, int low, int high) {
            int pivot = arr[high]; // 选择最后一个元素作为基准
            int i = low - 1; // 较小元素的索引

            for (int j = low; j < high; j++) {
                if (arr[j] <= pivot) {
                    i++;
                    swap(arr, i, j); // 交换 arr[i] 和 arr[j]
                }
            }
            swap(arr, i + 1, high); // 将基准元素放到正确位置
            return i + 1;
        }

        private static void swap(int[] arr, int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        public static void main(String[] args) {
            int[] arr = {10, 7, 8, 9, 1, 5};
            quickSort(arr, 0, arr.length - 1);
            System.out.println("排序后的数组:");
            for (int num : arr) {
                System.out.print(num + " ");
            }
        }
    }
    ```

    **记忆技巧**：
    - **分区操作**：记住 `partition` 方法的逻辑，尤其是 `i` 和 `j` 的作用。
    - **递归调用**：记住 `quickSort` 方法的递归终止条件（`low < high`）。
    - **基准选择**：通常选择最后一个元素作为基准，但可以灵活选择其他元素。

    ---

    ### 3. **掌握变种和常见问题**
    快速排序的变种和衍生问题很多，掌握这些变种可以加深对算法的理解。

    #### （1）**随机化快速排序**
    - **问题**：如果数组已经有序，选择最后一个元素作为基准会导致最坏情况（O(n²)）。
    - **解决方案**：随机选择基准元素。
    - **代码修改**：
    ```java
    private static int partition(int[] arr, int low, int high) {
        int randomIndex = low + (int) (Math.random() * (high - low + 1));
        swap(arr, randomIndex, high); // 将随机选择的元素放到最后
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }
    ```

    #### （2）**三路快速排序**
    - **问题**：如果数组中有大量重复元素，普通快速排序效率较低。
    - **解决方案**：将数组分为三部分（小于、等于、大于基准）。
    - **代码实现**：
    ```java
    public static void quickSort3Way(int[] arr, int low, int high) {
        if (low >= high) return;
        int lt = low, gt = high;
        int pivot = arr[low];
        int i = low;
        while (i <= gt) {
            if (arr[i] < pivot) {
                swap(arr, lt++, i++);
            } else if (arr[i] > pivot) {
                swap(arr, i, gt--);
            } else {
                i++;
            }
        }
        quickSort3Way(arr, low, lt - 1);
        quickSort3Way(arr, gt + 1, high);
    }
    ```

    #### （3）**快速选择算法（Quickselect）**
    - **问题**：找到数组中第 k 小的元素。
    - **解决方案**：基于快速排序的分区操作，只递归处理包含第 k 元素的那一部分。
    - **代码实现**：
    ```java
    public static int quickSelect(int[] arr, int low, int high, int k) {
        if (low == high) return arr[low];
        int pi = partition(arr, low, high);
        if (pi == k) {
            return arr[pi];
        } else if (pi < k) {
            return quickSelect(arr, pi + 1, high, k);
        } else {
            return quickSelect(arr, low, pi - 1, k);
        }
    }
    ```

    ---

    ### 4. **多练习和总结**
    - **手写代码**：反复手写快速排序代码，直到能够熟练写出。
    - **调试代码**：通过调试工具观察分区操作的过程，加深理解。
    - **解决变种问题**：多做一些与快速排序相关的算法题，例如：
    - 找到数组中第 k 大的元素。
    - 对链表进行快速排序。
    - 处理包含大量重复元素的数组。

    ---

    ### 5. **常见面试题**
    以下是一些常见的快速排序变种问题：
    1. **找到数组中第 k 大的元素**。
    2. **对链表进行快速排序**。
    3. **三路快速排序的实现**。
    4. **快速排序的非递归实现**。
    5. **快速排序的稳定性问题**。

    ---

    ### 总结
    要深刻记住快速排序代码并掌握其变种，需要：
    1. 理解核心思想（分治法和分区操作）。
    2. 记住代码模板，并通过反复练习巩固。
    3. 掌握常见变种（如随机化快速排序、三路快速排序、快速选择算法）。
    4. 多练习相关算法题，总结规律。

    通过以上方法，你可以逐步掌握快速排序及其变种，并在面试中游刃有余！


## 二分算法对数据有什么条件？
??? answer "答案"
    二分算法（二分查找）是一种高效的查找算法，适用于**有序数组**或**列表**。它的基本思想是通过不断将搜索范围缩小一半来快速定位目标值。

    ### 二分算法的条件
    1. **数据必须有序**：二分查找要求数据是有序的（升序或降序），因为算法依赖于中间值的比较来缩小搜索范围。
    2. **支持随机访问**：二分查找需要能够快速访问任意位置的元素，因此适用于数组或类似数据结构（如 `ArrayList`），而不适用于链表（如 `LinkedList`）。

    ---

    ### Java 实现二分查找

    以下是一个使用 Java 实现的二分查找代码示例：

    ```java
    public class BinarySearch {

        /**
         * 二分查找算法实现
         *
         * @param arr    有序数组（升序）
         * @param target 目标值
         * @return 目标值在数组中的索引，如果未找到则返回 -1
         */
        public static int binarySearch(int[] arr, int target) {
            int left = 0;                  // 左边界
            int right = arr.length - 1;   // 右边界

            while (left <= right) {
                int mid = left + (right - left) / 2; // 计算中间位置，避免溢出

                if (arr[mid] == target) {
                    return mid; // 找到目标值，返回索引
                } else if (arr[mid] < target) {
                    left = mid + 1; // 目标值在右半部分，调整左边界
                } else {
                    right = mid - 1; // 目标值在左半部分，调整右边界
                }
            }

            return -1; // 未找到目标值
        }

        public static void main(String[] args) {
            int[] arr = {1, 3, 5, 7, 9, 11, 13, 15}; // 有序数组
            int target = 7; // 目标值

            int result = binarySearch(arr, target);

            if (result != -1) {
                System.out.println("目标值 " + target + " 在数组中的索引为: " + result);
            } else {
                System.out.println("目标值 " + target + " 未找到");
            }
        }
    }
    ```

    ---

    ### 代码说明
    1. **`binarySearch` 方法**：
    - 参数 `arr` 是一个有序数组（升序）。
    - 参数 `target` 是要查找的目标值。
    - 返回值是目标值在数组中的索引，如果未找到则返回 `-1`。

    2. **`mid` 的计算**：
    - 使用 `left + (right - left) / 2` 计算中间位置，避免直接使用 `(left + right) / 2` 可能导致的整数溢出问题。

    3. **循环条件**：
    - `left <= right` 确保搜索范围有效。
    - 如果 `arr[mid] == target`，则找到目标值。
    - 如果 `arr[mid] < target`，说明目标值在右半部分，调整左边界 `left = mid + 1`。
    - 如果 `arr[mid] > target`，说明目标值在左半部分，调整右边界 `right = mid - 1`。

    4. **未找到目标值**：
    - 如果循环结束仍未找到目标值，返回 `-1`。

    ---

    ### 示例输出
    对于上述代码，输出结果为：
    ```
    目标值 7 在数组中的索引为: 3
    ```

    ---

    ### 时间复杂度
    - 二分查找的时间复杂度为 **O(log n)**，其中 `n` 是数组的长度。这是因为每次查找都将搜索范围缩小一半。

    ---

    ### 注意事项
    1. 如果数组是降序排列的，需要调整比较逻辑。
    2. 如果数组中有重复元素，二分查找可能返回任意一个匹配元素的索引。如果需要查找第一个或最后一个匹配元素，可以进一步优化算法。

## 如何深刻记住二分算法的代码，以及可能存在的变种算法题？
??? answer "答案"
    要深刻记住二分算法的代码并掌握其变种，关键在于理解其核心思想、掌握常见变种场景，并通过大量练习巩固记忆。以下是具体的学习方法和技巧：

    ---

    ### 一、理解二分算法的核心思想
    1. **核心思想**：
    - 二分算法通过不断将搜索范围缩小一半来快速定位目标值。
    - 它依赖于数据的**有序性**和**中间值的比较**。

    2. **关键点**：
    - **有序性**：数据必须有序（升序或降序）。
    - **中间值**：通过中间值将搜索范围分为两部分。
    - **边界调整**：根据比较结果调整左边界或右边界。

    3. **代码模板**：
    ```java
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid; // 找到目标值
        } else if (arr[mid] < target) {
            left = mid + 1; // 目标值在右半部分
        } else {
            right = mid - 1; // 目标值在左半部分
        }
    }
    return -1; // 未找到目标值
    ```

    ---

    ### 二、记忆代码的技巧
    1. **理解每一行代码的作用**：
    - `left` 和 `right` 表示当前搜索范围的左右边界。
    - `mid` 是中间位置，通过 `left + (right - left) / 2` 计算，避免溢出。
    - `arr[mid]` 与 `target` 的比较决定如何调整边界。

    2. **画图辅助理解**：
    - 画一个有序数组，标注 `left`、`right` 和 `mid` 的位置。
    - 模拟二分查找的过程，理解每一步的变化。

    3. **反复练习**：
    - 手写代码多次，直到能够不依赖参考写出完整代码。
    - 在 LeetCode 或类似平台上练习二分查找的基础题目。

    ---

    ### 三、二分算法的常见变种
    二分算法的变种通常围绕以下场景展开：

    #### 1. **查找第一个等于目标值的元素**
    - 场景：数组中有重复元素，找到第一个等于目标值的索引。
    - 代码：
        ```java
        public int findFirst(int[] arr, int target) {
            int left = 0, right = arr.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] >= target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            if (left < arr.length && arr[left] == target) {
                return left;
            }
            return -1;
        }
        ```

    #### 2. **查找最后一个等于目标值的元素**
    - 场景：数组中有重复元素，找到最后一个等于目标值的索引。
    - 代码：
        ```java
        public int findLast(int[] arr, int target) {
            int left = 0, right = arr.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] <= target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            if (right >= 0 && arr[right] == target) {
                return right;
            }
            return -1;
        }
        ```

    #### 3. **查找第一个大于等于目标值的元素**
    - 场景：找到第一个大于或等于目标值的元素（可用于插入位置）。
    - 代码：
        ```java
        public int findFirstGreaterOrEqual(int[] arr, int target) {
            int left = 0, right = arr.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] >= target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }
        ```

    #### 4. **查找最后一个小于等于目标值的元素**
    - 场景：找到最后一个小于或等于目标值的元素。
    - 代码：
        ```java
        public int findLastLessOrEqual(int[] arr, int target) {
            int left = 0, right = arr.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] <= target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return right;
        }
        ```

    ---

    ### 四、练习变种题目
    通过以下题目巩固二分算法的变种：
    1. **LeetCode 34. 在排序数组中查找元素的第一个和最后一个位置**
    - 题目链接：[LeetCode 34](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
    - 解法：结合 `findFirst` 和 `findLast`。

    2. **LeetCode 35. 搜索插入位置**
    - 题目链接：[LeetCode 35](https://leetcode.cn/problems/search-insert-position/)
    - 解法：使用 `findFirstGreaterOrEqual`。

    3. **LeetCode 704. 二分查找**
    - 题目链接：[LeetCode 704](https://leetcode.cn/problems/binary-search/)
    - 解法：标准二分查找。

    4. **LeetCode 278. 第一个错误的版本**
    - 题目链接：[LeetCode 278](https://leetcode.cn/problems/first-bad-version/)
    - 解法：查找第一个满足条件的元素。

    ---

    ### 五、总结
    1. **理解核心思想**：二分算法的核心是通过中间值比较缩小搜索范围。
    2. **记忆代码模板**：掌握标准二分查找的代码模板，理解每一行代码的作用。
    3. **掌握变种场景**：通过练习常见变种题目，熟悉不同场景下的边界调整。
    4. **多练习**：在 LeetCode 或其他平台上大量练习二分查找相关题目，巩固记忆。

    通过以上方法，你可以深刻记住二分算法的代码，并能够灵活应对各种变种题目！



## 反转链表
??? answer "答案"
    ### 反转链表的Java实现

    在Java中，反转链表可以通过迭代或递归的方式实现。以下是两种方法的示例代码：

    #### 1. 迭代法

    ```java
    class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public class Solution {
        public ListNode reverseList(ListNode head) {
            ListNode prev = null;
            ListNode curr = head;
            while (curr != null) {
                ListNode nextTemp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextTemp;
            }
            return prev;
        }
    }
    ```

    #### 2. 递归法

    ```java
    class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public class Solution {
        public ListNode reverseList(ListNode head) {
            if (head == null || head.next == null) {
                return head;
            }
            ListNode p = reverseList(head.next);
            head.next.next = head;
            head.next = null;
            return p;
        }
    }
    ```

    

    ### 如何深刻记住反转链表的实现

    1. **理解链表结构**：链表由节点组成，每个节点包含数据和指向下一个节点的指针。反转链表的核心是改变指针的方向。

    2. **迭代法的步骤**：
    - 初始化两个指针：`prev`（前一个节点）和`curr`（当前节点）。
    - 遍历链表，每次将当前节点的`next`指针指向`prev`。
    - 更新`prev`和`curr`，直到遍历完整个链表。
    - 最后，`prev`就是反转后的链表头。

    3. **递归法的步骤**：
    - 递归到链表的最后一个节点，然后开始反转。
    - 每次递归返回时，将当前节点的`next`节点的`next`指针指向当前节点。
    - 将当前节点的`next`指针置为`null`，避免循环。
    - 递归结束后，返回新的链表头。

    4. **多练习**：通过多次编写和调试代码，加深对反转链表过程的理解。

    5. **画图辅助**：在纸上画出链表的结构，模拟反转过程，帮助理解指针的变化。

    6. **总结规律**：无论是迭代还是递归，反转链表的核心都是改变指针的方向。掌握这一点，就能轻松应对类似问题。

    通过以上方法，你可以深刻记住并掌握反转链表的实现。

    ## 递归过程可视化

    假设链表为：1 → 2 → 3 → 4 → 5 → null

    递归调用栈：
    ```
    - reverseList(1)
       - reverseList(2)
         - reverseList(3)
           - reverseList(4)
             - reverseList(5) → 直接返回5 (因为5.next == null)
           - 现在head=4, p=5
           - 4.next.next=4 (即5.next=4)
           - 4.next=null
           - 返回p=5 (链表：5→4→null)
         - head=3, p=5
         - 3.next.next=3 (即4.next=3)
         - 3.next=null
         - 返回p=5 (链表：5→4→3→null)
       - head=2, p=5
       - 2.next.next=2 (即3.next=2)
       - 2.next=null
       - 返回p=5 (链表：5→4→3→2→null)
     - head=1, p=5
     - 1.next.next=1 (即2.next=1)
     - 1.next=null
     - 返回p=5 (链表：5→4→3→2→1→null)
    ```
    ## 关键点说明

    1. **递归终止条件**：当链表为空或只有一个节点时，不需要反转，直接返回
    2. **递归步骤**：先反转剩余链表（head.next之后的部分）
    3. **反转操作**：
    - `head.next.next = head`：让下一个节点指向当前节点
    - `head.next = null`：断开当前节点原来的指向
    4. **返回值**：始终返回新的头节点（原链表的尾节点）

    ## 时间复杂度分析

    - 时间复杂度：O(n)，需要遍历每个节点一次
    - 空间复杂度：O(n)，递归调用栈的深度等于链表长度

    这种递归方法虽然简洁，但对于长链表可能会导致栈溢出。在实际应用中，迭代法可能是更好的选择。


## 将两个有序的链表合并成一个有序的链表，递归和循环两中方式
??? answer "答案"
    # 合并两个有序链表

    下面我将用Java实现合并两个有序链表的递归和循环两种方式。

    ## 链表节点定义

    首先定义链表节点类：

    ```java
    class ListNode {
        int val;
        ListNode next;
        
        ListNode(int val) {
            this.val = val;
        }
        
        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }
    ```

    ## 1. 递归方式

    ```java
    public ListNode mergeTwoListsRecursive(ListNode l1, ListNode l2) {
        if (l1 == null) {
            return l2;
        }
        if (l2 == null) {
            return l1;
        }
        
        if (l1.val < l2.val) {
            l1.next = mergeTwoListsRecursive(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoListsRecursive(l1, l2.next);
            return l2;
        }
    }
    ```

    ## 2. 循环方式

    ```java
    public ListNode mergeTwoListsIterative(ListNode l1, ListNode l2) {
        // 创建一个哑节点作为结果链表的起始点
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        // 处理剩余节点
        current.next = (l1 != null) ? l1 : l2;
        
        return dummy.next;
    }
    ```

    ## 测试代码

    ```java
    public class Main {
        public static void main(String[] args) {
            // 创建链表1: 1->3->5
            ListNode l1 = new ListNode(1);
            l1.next = new ListNode(3);
            l1.next.next = new ListNode(5);
            
            // 创建链表2: 2->4->6
            ListNode l2 = new ListNode(2);
            l2.next = new ListNode(4);
            l2.next.next = new ListNode(6);
            
            Solution solution = new Solution();
            
            // 测试递归方式
            ListNode mergedRecursive = solution.mergeTwoListsRecursive(l1, l2);
            printList(mergedRecursive);
            
            // 重新创建链表用于测试循环方式
            l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
            l2 = new ListNode(2, new ListNode(4, new ListNode(6)));
            
            // 测试循环方式
            ListNode mergedIterative = solution.mergeTwoListsIterative(l1, l2);
            printList(mergedIterative);
        }
        
        private static void printList(ListNode head) {
            while (head != null) {
                System.out.print(head.val + " ");
                head = head.next;
            }
            System.out.println();
        }
    }
    ```

    ## 复杂度分析

    - **递归方式**:
    - 时间复杂度: O(n+m)，其中n和m分别是两个链表的长度
    - 空间复杂度: O(n+m)，递归调用栈的深度

    - **循环方式**:
    - 时间复杂度: O(n+m)
    - 空间复杂度: O(1)，只使用了常数级别的额外空间

    两种方法都能有效地合并两个有序链表，递归方法代码更简洁但空间复杂度较高，循环方法空间效率更优。



## 如何判断一个链是否存在回环？
??? answer "答案"
    # Java中判断链表是否存在回环的方法

    判断链表是否存在回环（循环）是常见的链表操作问题，以下是几种常用的Java实现方法：

    ## 1. 快慢指针法（Floyd判圈算法）

    这是最经典且高效的方法，时间复杂度O(n)，空间复杂度O(1)。

    ```java
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }
        
        ListNode slow = head;
        ListNode fast = head.next;
        
        while (slow != fast) {
            if (fast == null || fast.next == null) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }
    ```

    ## 2. 使用HashSet记录访问过的节点

    这种方法利用哈希表记录访问过的节点，空间复杂度O(n)。

    ```java
    public boolean hasCycle(ListNode head) {
        Set<ListNode> visited = new HashSet<>();
        while (head != null) {
            if (visited.contains(head)) {
                return true;
            }
            visited.add(head);
            head = head.next;
        }
        return false;
    }
    ```

    ## 3. 修改节点值的标记法

    这种方法会修改链表节点的值，不推荐在实际中使用，仅作为了解。

    ```java
    public boolean hasCycle(ListNode head) {
        while (head != null) {
            if (head.val == Integer.MIN_VALUE) {
                return true;
            }
            head.val = Integer.MIN_VALUE;
            head = head.next;
        }
        return false;
    }
    ```

    ## 链表节点定义

    以上方法中使用的ListNode通常定义为：

    ```java
    class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
            next = null;
        }
    }
    ```

    ## 推荐方法

    在实际应用中，**快慢指针法**是最优选择，因为它不需要额外的存储空间，且时间复杂度为线性。HashSet方法虽然直观，但需要额外的O(n)空间。修改节点值的方法会破坏原始数据，通常不推荐使用。



## 2000万个整数，找出第五十大的数字？
??? answer "答案"
    # 在Java中找出2000万个整数中的第50大数字

    要在2000万个整数中找出第50大的数字，有几种可行的解决方案，各有优缺点。以下是几种常见的方法：

    ## 方法一：使用最小堆（优先队列）

    ```java
    import java.util.PriorityQueue;

    public class FindNthLargest {
        public static int find50thLargest(int[] nums) {
            PriorityQueue<Integer> minHeap = new PriorityQueue<>();
            
            for (int num : nums) {
                minHeap.offer(num);
                if (minHeap.size() > 50) {
                    minHeap.poll(); // 移除最小的元素，保持堆大小为50
                }
            }
            
            return minHeap.peek(); // 堆顶就是第50大的元素
        }
        
        public static void main(String[] args) {
            // 假设有一个包含2000万个整数的数组
            int[] hugeArray = new int[20_000_000];
            // ... 填充数组数据 ...
            
            int result = find50thLargest(hugeArray);
            System.out.println("第50大的数字是: " + result);
        }
    }
    ```

    **复杂度分析**：
    - 时间复杂度：O(n log k)，其中n是元素总数(20,000,000)，k是50
    - 空间复杂度：O(k)，只需要维护大小为50的堆

    ## 方法二：快速选择算法（Quickselect）

    ```java
    import java.util.Random;

    public class FindNthLargest {
        public static int find50thLargest(int[] nums) {
            int k = 50;
            int left = 0;
            int right = nums.length - 1;
            Random rand = new Random();
            
            while (left <= right) {
                int pivotIndex = partition(nums, left, right, rand);
                if (pivotIndex == nums.length - k) {
                    return nums[pivotIndex];
                } else if (pivotIndex < nums.length - k) {
                    left = pivotIndex + 1;
                } else {
                    right = pivotIndex - 1;
                }
            }
            return -1; // 不应该到达这里
        }
        
        private static int partition(int[] nums, int left, int right, Random rand) {
            int pivotIndex = left + rand.nextInt(right - left + 1);
            int pivot = nums[pivotIndex];
            swap(nums, pivotIndex, right);
            
            int i = left;
            for (int j = left; j < right; j++) {
                if (nums[j] < pivot) {
                    swap(nums, i, j);
                    i++;
                }
            }
            swap(nums, i, right);
            return i;
        }
        
        private static void swap(int[] nums, int i, int j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    ```

    **复杂度分析**：
    - 平均时间复杂度：O(n)
    - 最坏时间复杂度：O(n^2)（但随机化可以避免最坏情况）
    - 空间复杂度：O(1)

    ## 方法选择建议

    1. **对于2000万数据量**：
    - 最小堆方法更稳定，不会出现最坏情况，且实现简单
    - 快速选择理论上平均更快，但实现稍复杂

    2. **实际应用**：
    - 如果只需要找一次第50大的数，两种方法都可以
    - 如果需要多次查询不同排名，考虑先排序（O(n log n)）然后可以O(1)查询

    3. **内存考虑**：
    - 最小堆只需要存储50个元素，内存效率高
    - 快速选择是原地算法，但需要能全部装入内存

    对于2000万整数（假设是int类型，约80MB内存），现代计算机都能轻松处理，两种方法都是可行的。

    # 返回前50大的数字（而非仅第50大）

    如果需要返回前50大的所有数字（按从大到小顺序），而不是仅仅第50大的数字，我们可以对之前的解决方案进行调整。以下是几种实现方法：

    ## 方法一：使用最小堆（优先队列）返回前50大

    ```java
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.List;
    import java.util.PriorityQueue;

    public class FindTopNLargest {
        public static List<Integer> findTop50Largest(int[] nums) {
            PriorityQueue<Integer> minHeap = new PriorityQueue<>();
            
            for (int num : nums) {
                minHeap.offer(num);
                if (minHeap.size() > 50) {
                    minHeap.poll(); // 保持堆大小为50
                }
            }
            
            // 将堆中的元素转为List并排序（从大到小）
            List<Integer> result = new ArrayList<>(minHeap);
            Collections.sort(result, Collections.reverseOrder());
            
            return result;
        }
        
        public static void main(String[] args) {
            int[] hugeArray = new int[20_000_000];
            // ... 填充数组数据 ...
            
            List<Integer> top50 = findTop50Largest(hugeArray);
            System.out.println("前50大的数字是: " + top50);
        }
    }
    ```

    ## 方法二：使用快速选择分区后提取前50大

    ```java
    import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.List;
    import java.util.Random;

    public class FindTopNLargest {
        public static List<Integer> findTop50Largest(int[] nums) {
            int k = 50;
            if (nums.length <= k) {
                List<Integer> result = new ArrayList<>();
                for (int num : nums) result.add(num);
                result.sort(Collections.reverseOrder());
                return result;
            }
            
            // 使用快速选择找到第50大的元素的分界点
            quickSelect(nums, 0, nums.length - 1, nums.length - k);
            
            // 提取最后50个元素（即前50大的元素）
            int[] top50 = Arrays.copyOfRange(nums, nums.length - k, nums.length);
            
            // 排序（从大到小）
            Arrays.sort(top50);
            List<Integer> result = new ArrayList<>();
            for (int i = top50.length - 1; i >= 0; i--) {
                result.add(top50[i]);
            }
            
            return result;
        }
        
        private static void quickSelect(int[] nums, int left, int right, int k) {
            Random rand = new Random();
            while (left <= right) {
                int pivotIndex = partition(nums, left, right, rand);
                if (pivotIndex == k) {
                    return;
                } else if (pivotIndex < k) {
                    left = pivotIndex + 1;
                } else {
                    right = pivotIndex - 1;
                }
            }
        }
        
        private static int partition(int[] nums, int left, int right, Random rand) {
            int pivotIndex = left + rand.nextInt(right - left + 1);
            int pivot = nums[pivotIndex];
            swap(nums, pivotIndex, right);
            
            int i = left;
            for (int j = left; j < right; j++) {
                if (nums[j] < pivot) {
                    swap(nums, i, j);
                    i++;
                }
            }
            swap(nums, i, right);
            return i;
        }
        
        private static void swap(int[] nums, int i, int j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    ```

    ## 方法三：完整排序（适合多次查询）

    ```java
    import java.util.Arrays;
    import java.util.Collections;
    import java.util.List;
    import java.util.stream.Collectors;

    public class FindTopNLargest {
        public static List<Integer> findTop50Largest(int[] nums) {
            // 将数组转为List以便使用Collections.sort
            List<Integer> list = Arrays.stream(nums).boxed().collect(Collectors.toList());
            
            // 降序排序
            Collections.sort(list, Collections.reverseOrder());
            
            // 返回前50个元素
            return list.subList(0, Math.min(50, list.size()));
        }
    }
    ```

    ## 各方法比较

    1. **最小堆方法**：
    - 时间复杂度：O(n log k)，其中k=50
    - 空间复杂度：O(k)
    - 优点：内存效率高，适合大数据量
    - 缺点：需要额外的排序步骤来得到有序结果

    2. **快速选择+提取方法**：
    - 平均时间复杂度：O(n + k log k)
    - 空间复杂度：O(k)（存储结果）
    - 优点：理论上平均更快
    - 缺点：实现复杂，有最坏情况风险

    3. **完整排序方法**：
    - 时间复杂度：O(n log n)
    - 空间复杂度：O(n)
    - 优点：实现简单
    - 缺点：对于只需要前50大的情况效率不高

    ## 推荐选择

    对于2000万数据量只需要前50大的情况，**最小堆方法**是最佳选择：
    - 内存效率高（只维护50个元素的堆）
    - 时间复杂度合理（n log k）
    - 实现简单可靠

    如果性能测试表明需要更快的解决方案，可以考虑快速选择方法，但实现复杂度更高。

## 一个文件中有100万个整数，由空格分开，在程序中判断用户输入的整数是否在此文件中。说出最优的方法
??? answer "答案"
    # 判断大文件中是否存在指定整数的最优方法

    对于在包含100万个整数的文件中快速判断用户输入整数是否存在的问题，最优的解决方案需要考虑以下几个方面：

    ## 最优方法：使用HashSet

    1. **预处理阶段**：
    - 读取文件并将所有整数存入一个`HashSet<Integer>`中
    - HashSet的查找时间复杂度为O(1)，非常高效

    2. **查询阶段**：
    - 当用户输入一个整数时，只需调用`set.contains(inputNumber)`
    - 返回true表示存在，false表示不存在

    ## 实现代码示例

    ```java
    import java.io.*;
    import java.util.*;

    public class NumberChecker {
        private Set<Integer> numbers = new HashSet<>();
        
        public void loadFile(String filePath) throws IOException {
            try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    String[] parts = line.split(" ");
                    for (String part : parts) {
                        numbers.add(Integer.parseInt(part));
                    }
                }
            }
        }
        
        public boolean contains(int number) {
            return numbers.contains(number);
        }
        
        public static void main(String[] args) {
            NumberChecker checker = new NumberChecker();
            try {
                checker.loadFile("numbers.txt");
                
                Scanner scanner = new Scanner(System.in);
                System.out.println("Enter a number to check (or 'q' to quit):");
                
                while (scanner.hasNext()) {
                    if (scanner.hasNextInt()) {
                        int num = scanner.nextInt();
                        System.out.println("Number " + num + " exists: " + checker.contains(num));
                    } else if (scanner.next().equalsIgnoreCase("q")) {
                        break;
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    ```

    ## 其他考虑方案

    1. **排序后二分查找**：
    - 如果内存受限，可以将数字排序后存储在数组中
    - 使用`Arrays.binarySearch()`进行查找(O(log n)时间复杂度)
    - 但预处理时间较长，且查询效率不如HashSet

    2. **布隆过滤器(Bloom Filter)**：
    - 适用于内存极度受限且可以接受一定误报率的场景
    - 但Java标准库没有内置实现，需要第三方库

    3. **数据库/索引**：
    - 对于超大规模数据(数十亿)，可以考虑使用数据库
    - 但对于100万量级，内存中的HashSet通常是最佳选择

    ## 性能分析

    - **空间复杂度**：每个Integer对象约占用16字节，100万整数约16MB内存
    - **预处理时间**：O(n)时间读取和存储所有数字
    - **查询时间**：每次查询O(1)时间

    对于100万整数的规模，HashSet方案在大多数现代机器上都能提供极快的查询响应。



## 二叉树的深度优先遍历和广度优先遍历的具体实现
??? answer "答案"
    # Java 实现二叉树的深度优先遍历和广度优先遍历

    下面我将分别介绍二叉树的深度优先遍历（DFS）和广度优先遍历（BFS）的 Java 实现，包括递归和非递归版本。

    ## 1. 二叉树节点定义

    首先定义二叉树的节点类：

    ```java
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        
        TreeNode(int x) {
            val = x;
        }
    }
    ```

    ## 2. 深度优先遍历（DFS）

    深度优先遍历有三种方式：前序遍历、中序遍历和后序遍历。

    ### 2.1 递归实现

    ```java
    // 前序遍历（根-左-右）
    public void preOrderTraversal(TreeNode root) {
        if (root == null) return;
        System.out.print(root.val + " "); // 访问根节点
        preOrderTraversal(root.left);     // 遍历左子树
        preOrderTraversal(root.right);    // 遍历右子树
    }

    // 中序遍历（左-根-右）
    public void inOrderTraversal(TreeNode root) {
        if (root == null) return;
        inOrderTraversal(root.left);      // 遍历左子树
        System.out.print(root.val + " "); // 访问根节点
        inOrderTraversal(root.right);     // 遍历右子树
    }

    // 后序遍历（左-右-根）
    public void postOrderTraversal(TreeNode root) {
        if (root == null) return;
        postOrderTraversal(root.left);    // 遍历左子树
        postOrderTraversal(root.right);   // 遍历右子树
        System.out.print(root.val + " "); // 访问根节点
    }
    ```

    ### 2.2 非递归实现（使用栈）

    ```java
    // 前序遍历（非递归）
    public void preOrderTraversalIterative(TreeNode root) {
        if (root == null) return;
        
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            System.out.print(node.val + " ");
            
            // 先压入右节点，再压入左节点，这样出栈顺序就是左-右
            if (node.right != null) stack.push(node.right);
            if (node.left != null) stack.push(node.left);
        }
    }

    // 中序遍历（非递归）
    public void inOrderTraversalIterative(TreeNode root) {
        if (root == null) return;
        
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        
        while (curr != null || !stack.isEmpty()) {
            // 先遍历到最左节点
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            
            curr = stack.pop();
            System.out.print(curr.val + " ");
            curr = curr.right;
        }
    }

    // 后序遍历（非递归）
    public void postOrderTraversalIterative(TreeNode root) {
        if (root == null) return;
        
        Stack<TreeNode> stack = new Stack<>();
        Stack<TreeNode> output = new Stack<>();
        stack.push(root);
        
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            output.push(node);
            
            if (node.left != null) stack.push(node.left);
            if (node.right != null) stack.push(node.right);
        }
        
        while (!output.isEmpty()) {
            System.out.print(output.pop().val + " ");
        }
    }
    ```

    ## 3. 广度优先遍历（BFS）

    广度优先遍历通常使用队列来实现。

    ### 3.1 基本BFS实现

    ```java
    public void levelOrderTraversal(TreeNode root) {
        if (root == null) return;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            System.out.print(node.val + " ");
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
    ```

    ### 3.2 按层打印的BFS实现

    ```java
    public void levelOrderTraversalByLevel(TreeNode root) {
        if (root == null) return;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                System.out.print(node.val + " ");
                
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            System.out.println(); // 换行表示新的一层
        }
    }
    ```

    ## 4. 测试代码

    ```java
    public class BinaryTreeTraversal {
        public static void main(String[] args) {
            // 构建二叉树
            TreeNode root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            
            BinaryTreeTraversal traversal = new BinaryTreeTraversal();
            
            System.out.println("前序遍历（递归）:");
            traversal.preOrderTraversal(root);
            System.out.println("\n前序遍历（非递归）:");
            traversal.preOrderTraversalIterative(root);
            
            System.out.println("\n\n中序遍历（递归）:");
            traversal.inOrderTraversal(root);
            System.out.println("\n中序遍历（非递归）:");
            traversal.inOrderTraversalIterative(root);
            
            System.out.println("\n\n后序遍历（递归）:");
            traversal.postOrderTraversal(root);
            System.out.println("\n后序遍历（非递归）:");
            traversal.postOrderTraversalIterative(root);
            
            System.out.println("\n\n广度优先遍历:");
            traversal.levelOrderTraversal(root);
            
            System.out.println("\n\n按层打印的广度优先遍历:");
            traversal.levelOrderTraversalByLevel(root);
        }
    }
    ```

    输出结果：
    ```
    前序遍历（递归）:
    1 2 4 5 3 6 7 
    前序遍历（非递归）:
    1 2 4 5 3 6 7 

    中序遍历（递归）:
    4 2 5 1 6 3 7 
    中序遍历（非递归）:
    4 2 5 1 6 3 7 

    后序遍历（递归）:
    4 5 2 6 7 3 1 
    后序遍历（非递归）:
    4 5 2 6 7 3 1 

    广度优先遍历:
    1 2 3 4 5 6 7 

    按层打印的广度优先遍历:
    1 
    2 3 
    4 5 6 7 
    ```

    这些实现涵盖了二叉树遍历的主要方法，可以根据需要选择递归或非递归版本。递归版本代码简洁但可能有栈溢出风险，非递归版本使用显式栈/队列，更适合深度大的树。



## Java寻找Android最近公共View/祖先
??? answer "答案"
    # 在Android中寻找两个View的最近公共祖先(LCA)

    在Android开发中，有时需要找到两个视图(View)在视图树中的最近公共祖先(最低公共父节点)。以下是几种实现方法：

    ## 方法一：通过遍历父节点链

    ```java
    public static View findLowestCommonAncestor(View view1, View view2) {
        if (view1 == null || view2 == null) {
            return null;
        }
        
        // 收集view1的所有祖先
        List<View> ancestors1 = new ArrayList<>();
        View current = view1;
        while (current != null) {
            ancestors1.add(current);
            current = current.getParent() instanceof View ? (View) current.getParent() : null;
        }
        
        // 检查view2及其祖先是否在view1的祖先列表中
        current = view2;
        while (current != null) {
            if (ancestors1.contains(current)) {
                return current;
            }
            current = current.getParent() instanceof View ? (View) current.getParent() : null;
        }
        
        return null; // 没有公共祖先
    }
    ```

    ## 方法二：优化版本（减少内存使用）

    ```java
    public static View findLowestCommonAncestorOptimized(View view1, View view2) {
        if (view1 == null || view2 == null) {
            return null;
        }
        
        // 获取两个视图的深度
        int depth1 = getDepth(view1);
        int depth2 = getDepth(view2);
        
        // 使两个视图处于同一深度
        while (depth1 > depth2) {
            view1 = view1.getParent() instanceof View ? (View) view1.getParent() : null;
            depth1--;
        }
        while (depth2 > depth1) {
            view2 = view2.getParent() instanceof View ? (View) view2.getParent() : null;
            depth2--;
        }
        
        // 同时向上遍历，直到找到公共祖先
        while (view1 != view2 && view1 != null && view2 != null) {
            view1 = view1.getParent() instanceof View ? (View) view1.getParent() : null;
            view2 = view2.getParent() instanceof View ? (View) view2.getParent() : null;
        }
        
        return view1 == view2 ? view1 : null;
    }

    private static int getDepth(View view) {
        int depth = 0;
        View current = view;
        while (current != null) {
            depth++;
            current = current.getParent() instanceof View ? (View) current.getParent() : null;
        }
        return depth;
    }
    ```

    ## 方法三：使用递归实现

    ```java
    public static View findLowestCommonAncestorRecursive(View root, View view1, View view2) {
        if (root == null || root == view1 || root == view2) {
            return root;
        }
        
        View left = findLowestCommonAncestorRecursive(root.getParent(), view1, view2);
        View right = findLowestCommonAncestorRecursive(root.getParent(), view1, view2);
        
        if (left != null && right != null) {
            return root;
        }
        
        return left != null ? left : right;
    }
    ```

    ## 使用示例

    ```java
    View view1 = findViewById(R.id.view1);
    View view2 = findViewById(R.id.view2);
    View lca = findLowestCommonAncestorOptimized(view1, view2);

    if (lca != null) {
        Log.d("LCA", "最近公共祖先的ID: " + (lca.getId() == View.NO_ID ? "无ID" : getResources().getResourceName(lca.getId())));
    } else {
        Log.d("LCA", "没有找到公共祖先");
    }
    ```

    ## 注意事项

    1. 这些方法适用于任何Android视图层次结构，包括Activity、Fragment和自定义ViewGroup
    2. 如果两个视图不在同一个视图树中，将返回null
    3. 方法二(优化版本)通常性能最好，因为它不需要存储整个祖先列表
    4. 在复杂的视图层次结构中，递归方法可能会导致栈溢出

    选择哪种方法取决于你的具体需求和视图树的复杂度。对于大多数情况，方法二(优化版本)是最佳选择。



## 二叉树，读取每一层最右边的节点
??? answer "答案"
    # 获取二叉树每一层最右边的节点（Java实现）

    要获取二叉树每一层最右边的节点，我们可以使用广度优先搜索（BFS）算法，也称为层序遍历。在遍历每一层时，记录该层的最后一个节点即可。

    以下是Java实现：

    ```java
    import java.util.ArrayList;
    import java.util.LinkedList;
    import java.util.List;
    import java.util.Queue;

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    public class RightSideView {
        public List<Integer> rightSideView(TreeNode root) {
            List<Integer> result = new ArrayList<>();
            if (root == null) {
                return result;
            }
            
            Queue<TreeNode> queue = new LinkedList<>();
            queue.offer(root);
            
            while (!queue.isEmpty()) {
                int levelSize = queue.size();
                
                for (int i = 0; i < levelSize; i++) {
                    TreeNode currentNode = queue.poll();
                    
                    // 如果是当前层的最后一个节点，加入结果列表
                    if (i == levelSize - 1) {
                        result.add(currentNode.val);
                    }
                    
                    // 添加子节点到队列
                    if (currentNode.left != null) {
                        queue.offer(currentNode.left);
                    }
                    if (currentNode.right != null) {
                        queue.offer(currentNode.right);
                    }
                }
            }
            
            return result;
        }
        
        // 测试代码
        public static void main(String[] args) {
            // 构建测试二叉树
            //       1
            //      / \
            //     2   3
            //      \   \
            //       5   4
            TreeNode root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.right = new TreeNode(5);
            root.right.right = new TreeNode(4);
            
            RightSideView solution = new RightSideView();
            List<Integer> rightView = solution.rightSideView(root);
            System.out.println(rightView); // 输出: [1, 3, 4]
        }
    }
    ```

    ## 算法说明

    1. **初始化**：创建一个队列用于BFS遍历，一个列表存储结果。
    2. **处理根节点**：如果根节点不为空，将其加入队列。
    3. **层序遍历**：
    - 每次处理一层节点
    - 记录当前层的节点数
    - 遍历当前层的所有节点，将每个节点的左右子节点加入队列
    - 当前层的最后一个节点即为该层最右边的节点，将其值加入结果列表
    4. **返回结果**：当队列为空时，遍历结束，返回结果列表

    ## 复杂度分析

    - 时间复杂度：O(n)，其中n是二叉树的节点数，每个节点恰好被访问一次
    - 空间复杂度：O(n)，队列中最多存储一层节点，最坏情况下是O(n)

    这种方法高效且直观地解决了问题，适用于任何二叉树结构。