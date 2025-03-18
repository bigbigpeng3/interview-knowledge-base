# Java核心知识点

## Java基础类型有哪些？

??? answer "答案"
    ```java
    Java有8种基本数据类型：
    - byte：8位，-128到127
    - short：16位，-32,768到32,767
    - int：32位，-2^31到2^31-1
    - long：64位，-2^63到2^63-1
    - float：32位，单精度浮点
    - double：64位，双精度浮点
    - char：16位，表示一个Unicode字符
    - boolean：表示true/false

    基本类型的包装类分别是：Byte, Short, Integer, Long, Float, Double, Character和Boolean
    ```


## Java中equals和 "==" 的区别？

??? answer "答案"
    来源链接 https://www.cnblogs.com/smyhvae/p/3929585.html

    【正文】
    平时在学Android和Java语言的时候，总是碰到“equals”和“==”这两个字符，老感觉差不多；其实还是有一些区别的，今天干脆把它们彻底弄清楚。

    一、java当中的数据类型和“==”的含义：
    - 基本数据类型（也称原始数据类型） ：byte,short,char,int,long,float,double,boolean。他们之间的比较，应用双等号（==）,比较的是他们的值。

    - 引用数据类型：当他们用（==）进行比较的时候，比较的是他们在内存中的存放地址（确切的说，是堆内存地址）。

    注：对于第二种类型，除非是同一个new出来的对象，他们的比较后的结果为true，否则比较后结果为false。因为每new一次，都会重新开辟堆内存空间。

    二、equals()方法介绍：

    JAVA当中所有的类都是继承于Object这个超类的，在Object类中定义了一个equals的方法，equals的源码是这样写的：
    public boolean equals(Object obj) {
        //this - s1
        //obj - s2
        return (this == obj);
    }

    可以看到，这个方法的初始默认行为是比较对象的内存地址值，一般来说，意义不大。所以，在一些类库当中这个方法被重写了，如String、Integer、Date。在这些类当中equals有其自身的实现（一般都是用来比较对象的成员变量值是否相同），而不再是比较类在堆内存中的存放地址了。 

    所以说，对于复合数据类型之间进行equals比较，在没有覆写equals方法的情况下，他们之间的比较还是内存中的存放位置的地址值，跟双等号（==）的结果相同；如果被复写，按照复写的要求来。

    我们对上面的两段内容做个总结吧：

     == 的作用：

    　　基本类型：比较的就是值是否相同

    　　引用类型：比较的就是地址值是否相同

    equals 的作用:

    　　引用类型：默认情况下，比较的是地址值。

    注：不过，我们可以根据情况自己重写该方法。一般重写都是自动生成，比较对象的成员变量值是否相同

    关于String中的equals方法。


## String，StringBuilder，StringBuffer的区别？
 

## String为什么要设计成final？


## String a = "Hello", String b = new String("Hello") 使用 "==" 时，它们相等吗？为什么？什么原理？



## JVM常量池，堆，栈