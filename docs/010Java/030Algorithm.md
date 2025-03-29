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



## Java反转链表
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
    7. reverseList(1)
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

    ## 关键点说明

    1. **递归终止条件**：当链表为空或只有一个节点时，不需要反转，直接返回
    2. **递归步骤**：先反转剩余链表（head.next之后的部分）
    3. **反转操作**：
    - `head.next.next = head`：让下一个节点指向当前节点
    - `head.next = null`：断开当前节点原来的指向
    1. **返回值**：始终返回新的头节点（原链表的尾节点）

    ## 时间复杂度分析

    - 时间复杂度：O(n)，需要遍历每个节点一次
    - 空间复杂度：O(n)，递归调用栈的深度等于链表长度

    这种递归方法虽然简洁，但对于长链表可能会导致栈溢出。在实际应用中，迭代法可能是更好的选择。

## 将两个有序的链表合并成一个有序的链表，递归和循环两中方式
??? answer "答案"




## 如何判断一个链是否存在回环？
??? answer "答案"




## 2000万个整数，找出第五十大的数字？
??? answer "答案"




## 一个文件中有100万个整数，由空格分开，在程序中判断用户输入的整数是否在此文件中。说出最优的方法
??? answer "答案"




## 二叉树的深度优先遍历和广度优先遍历的具体实现
??? answer "答案"




## 寻找最近公共View/祖先
??? answer "答案"




## 二叉树，读取每一层最右边的节点
??? answer "答案"

