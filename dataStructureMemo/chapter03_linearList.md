### 线性表
零个或多个数据元素的有限序列。
```
ADT 线性表(List) 
Data
    线性表的数据对象集合为{a1, a2, ......, an}，每个元素的类型均为 DataType。
    其中，除第一个元素 a1 外，每一个元素有且只有一个直接前驱元素，
    除了最后一个元素 an 外，每一个元素有且只有一个直接后继元素。
    数据元素之间的关系是一对一的关系。
Operation
    InitList(*L):          初始化操作，建立一个空的线性表 L。
    ListEmpty(L):          若线性表为空，返回 true，否则返回 false。
    ClearList(*L):         将线性表清空。
    GetElem(L, i, *e):     将线性表 L 中的第 i 个位置元素值返回给 e。
    LocateElem(L, e):      在线性表 L 中查找与给定值 e 相等的元素，
                           如果查找成功，返回该元素在表中序号表示成功；
                           否则，返回 0 表示失败。
    ListInsert(*L, i, e):  在线性表 L 中第 i 个位置插入新元素 e。
    ListDelete(*L, i, e):  删除线性表 L 中第 i 个位置元素，并用 e 返回其值。
    ListLength:            返回线性表 L 的元素个数。
```

---

#### 线性表的顺序存储结构
用一段地址连续的存储单元依次存储线性表的数据元素。

##### 描述顺序存储结构需要三个属性：
- 存储空间的起始位置：数组 data，它的存储位置就是存储空间的存储位置。
- 线性表的最大存储容量：数组长度 MaxSize。
- 线性表的当前长度：length。

##### 地址计算方法：
LOC(ai)=LOC(a1)+(i-1)*c （c 为占用的存储单元）

##### 随机存取结构：
通过这个公式，可以随时算出线性表中任意位置的地址，不管它是第一个还是最后一个，都是相同的时间。
那么对每个线性表位置的存入或者取出数据，对于计算机来说都是相等的时间，也就是一个常数，因此用算法中学到的时间复杂度的概念来说，它的存取时间性能为 O(1)。

---

#### 3.5　顺序存储结构的插入与删除

##### 3.5.1　获得元素操作
```
#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0
typedef int Status;
/* Status是函数的类型，其值是函数结果状态代码，如 OK 等 */
/* 初始条件：顺序线性表L已存在，1 ≤ i ≤ ListLength(L) */
/* 操作结果：用 e 返回 L 中第 i 个数据元素的值 */
Status GetElem(SqList L, int i, ElemType *e) {
     if (L.length == 0 || i < 1 || i > L.length)
         return ERROR;
     *e = L.data[i - 1];
     return OK;
}
```
##### 插入算法的思路：
1. 如果插入位置不合理，抛出异常；
2. 如果线性表长度大于等于数组长度，则抛出异常或动态增加容量；
3. 从最后一个元素开始向前遍历到第 i 个位置，分别将它们都向后移动一个位置；
4. 将要插入元素填入位置i处； 
5. 表长加 1。
```
/* 初始条件：顺序线性表 L 已存在，1 ≤ i ≤ ListLength(L)， */
/* 操作结果：在 L 中第 i 个位置之前插入新的数据元素 e，L 的长度加 1 */
Status ListInsert(SqList *L, int i, ElemType e) {
     int k;
     if (L->length == MAXSIZE)          /* 顺序线性表已经满 */
         return ERROR;
     if (i < 1 || i > L->length + 1)    /* 当i不在范围内时 */
         return ERROR;
     if (i <= L->length)                /* 若插入数据位置不在表尾 */
     {
         for (k = L->length - 1; k >= i - 1; k—)    /*将要插入位置后数据元素向后移动一位 */
            L->data[k + 1] = L->data[k];
     }
     L->data[i - 1] = e;     /* 将新元素插入 */
     L->length++;
     return OK;
}
```

##### 删除算法的思路：
1. 如果删除位置不合理，抛出异常；
2. 取出删除元素；
3. 从删除元素位置开始遍历到最后一个元素位置，分别将它们都向前移动一个位置；
4. 表长减1。
```
/* 初始条件：顺序线性表 L 已存在，1 ≤ i ≤ ListLength(L) */
/* 操作结果：删除 L 的第 i 个数据元素，并用 e 返回其值，L 的长度减 1 */
Status ListDelete(SqList *L, int i, ElemType *e) {
     int k;
     if (L->length == 0)            /* 线性表为空 */
         return ERROR;
     if (i < 1 || i > L->length)     /* 删除位置不正确 */
         return ERROR;
     *e = L->data[i - 1];
     if (i < L->length)             /* 如果删除不是最后位置 */
         {
             for (k = i; k < L->length; k++)    /* 将删除位置后继元素前移 */
                 L->data[k - 1] = L->data[k];
         }
     L->length-—;
     return OK;
 }
```
##### 3.5.4　线性表顺序存储结构的优缺点

优点：
- 无须为表示表中元素之间的逻辑关系而增加额外的存储空间
- 可以快速地存取表中任一位置的元素

缺点：
- 插入和删除操作需要移动大量的元素
- 当线性表长度变化较大时，难以确定存储空间的容量
- 造成存储空间的“碎片”

---

#### 3.6　线性表的链式存储结构（单链表）
线性表链式存储结构代码描述：
```
/* 线性表的单链表存储结构 */
Typedef struct Node {
    ElemType data;
    struct Node *next;
} Node;
Typedef struct Node *LinkList;  /* 定义LinkList */
```

P 是第 i 个元素的指针，数据元素
{
    数据域 p -> data
    指针域 p -> next
}

P -> data = ai;
P -> next -> data = a(i+1);
![LinearList items](./imgs/linearListItems.jpg)

<img src="./imgs/linearListItems.jpg" width="500" align=center />
