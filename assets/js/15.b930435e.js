(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{524:function(v,_,e){"use strict";e.r(_);var t=e(7),p=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("链接来自：https://mubu.com/doc/4VC7JuHlj6H")]),v._v(" "),e("p",[v._v("SQL是什么？")]),v._v(" "),e("p",[v._v("SQL是一种能指挥数据库自动&批量处理大量Excel表格的超级简单的语言。")]),v._v(" "),e("p",[v._v("SQL查询语句语法结构和运行顺序")]),v._v(" "),e("p",[v._v("语法结构: select--from--where--group by--having--order by--limit")]),v._v(" "),e("p",[v._v("运行顺序:from--where--group by--having--order by--limit--select")]),v._v(" "),e("h3",{attrs:{id:"主知识点一-select-from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主知识点一-select-from"}},[v._v("#")]),v._v(" "),e("strong",[v._v("主知识点一：select&from")])]),v._v(" "),e("p",[v._v("【标准语法】")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名")]),v._v(" "),e("p",[v._v("from 表名称")])]),v._v(" "),e("p",[v._v("【语法解释】")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("select 字段名 表明选择查询表格中的哪几列进行查看")])]),v._v(" "),e("li",[e("p",[v._v("from 表格名 表明你查询的数据来自哪一个数据库表")])])]),v._v(" "),e("p",[v._v("【总结】")]),v._v(" "),e("ul",[e("li",[v._v("基础语法")])]),v._v(" "),e("blockquote",[e("p",[v._v("​       select  字段名 as 别名 from  表名称")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("查询所有列")]),v._v(" "),e("blockquote",[e("p",[v._v("select * from  表名称")])])]),v._v(" "),e("li",[e("p",[v._v("数据去重")]),v._v(" "),e("blockquote",[e("p",[v._v("select  distinct  字段名 from 表名称")])])]),v._v(" "),e("li",[e("p",[v._v("select中的计算字段")]),v._v(" "),e("blockquote",[e("p",[v._v("select   字段名,计算字段 from  表名称")])])])]),v._v(" "),e("h3",{attrs:{id:"主知识点二-where"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主知识点二-where"}},[v._v("#")]),v._v(" "),e("strong",[v._v("主知识点二：where")])]),v._v(" "),e("p",[v._v("【标准语法】")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名")]),v._v(" "),e("p",[v._v("from 表格名")]),v._v(" "),e("p",[v._v("where 条件代码")])]),v._v(" "),e("p",[v._v("【语法解释】")]),v._v(" "),e("ul",[e("li",[v._v("where 条件代码 表明从数据库表中选取满足条件的数据")])]),v._v(" "),e("p",[v._v("【运算符】")]),v._v(" "),e("p",[v._v("先来看这个表格，比较运算符，用于判断表中的哪些数据符合条件，and、or和not为逻辑运算符，not一般和与其他连用例如not in等")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f386d31c-876c-4fbd-aa07-16a0f36b006d-9404487.jpg",alt:"image"}})]),v._v(" "),e("p",[v._v("【模糊查询like】")]),v._v(" "),e("p",[v._v("条件代码中除了使用运算符来进行条件判断，还可以使用like操作符组合通配符进行模糊查询")]),v._v(" "),e("p",[v._v("通配符用来匹配值的一部分，跟在LIKE关键字后面进行数据过滤常用的通配符有%和_，%用来匹配多个字符可以是零个、一个也可以是多个字符，_仅能用来匹配单个字符")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/5714f438-11a2-482c-8071-de8290bf562b-9404487.jpg",alt:"image"}})]),v._v(" "),e("p",[v._v("【题目】")]),v._v(" "),e("p",[v._v("查询国家名name中第二个字符为't'的国家")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/0904efdd-6203-4e15-8c8f-5f595ed5e6e6-9404487.jpg",alt:"img"}})]),v._v(" "),e("p",[v._v("【扩展】")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("了解in的用法")]),v._v(" "),e("ul",[e("li",[v._v("in会筛选出字段中所有与括号内数据相等的行")])]),v._v(" "),e("blockquote",[e("p",[v._v("select name,population from world")]),v._v(" "),e("p",[v._v("where name in ('Brazil','Russia','India','China')")])])]),v._v(" "),e("li",[e("p",[v._v("了解between...and...的用法")]),v._v(" "),e("ul",[e("li",[v._v("between and选取介于两个值之间且包含这两个值的数据范围，这些值可以是数值或者日期")])]),v._v(" "),e("blockquote",[e("p",[v._v("select name,area from world")]),v._v(" "),e("p",[v._v("where area between 250000 and 300000")])])])]),v._v(" "),e("p",[v._v("【总结】")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("标准语法")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名")]),v._v(" "),e("p",[v._v("from 表格名")]),v._v(" "),e("p",[v._v("where 条件代码")])])]),v._v(" "),e("li",[e("p",[v._v("运算符查询语法")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名")]),v._v(" "),e("p",[v._v("from 表名称")]),v._v(" "),e("p",[v._v("where 字段名 运算符 值")])])]),v._v(" "),e("li",[e("p",[v._v("模糊查询语法")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名")]),v._v(" "),e("p",[v._v("from 表名称")]),v._v(" "),e("p",[v._v("where 字段名 like '通配符+字符'")])])]),v._v(" "),e("li",[e("p",[v._v("使用多条件查询")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名")]),v._v(" "),e("p",[v._v("from 表名称")]),v._v(" "),e("p",[v._v("where 条件代码1 and|or 条件代码2")])])]),v._v(" "),e("li",[e("p",[v._v("运算符")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f386d31c-876c-4fbd-aa07-16a0f36b006d-9404487.jpg",alt:"img"}})])]),v._v(" "),e("li",[e("p",[v._v("通配符")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/5714f438-11a2-482c-8071-de8290bf562b-9404487.jpg",alt:"img"}})])])]),v._v(" "),e("h3",{attrs:{id:"主知识点三-聚合函数、group-by-having"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主知识点三-聚合函数、group-by-having"}},[v._v("#")]),v._v(" 主知识点三：聚合函数、group by&having")]),v._v(" "),e("h4",{attrs:{id:"聚合函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数"}},[v._v("#")]),v._v(" 聚合函数")]),v._v(" "),e("p",[v._v("注意聚合函数都会忽略列中的NULL值，但是COUNT(*)也就是统计全部数据的行数时，不会忽略NULL值")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/b177d83e-4777-4d7d-a8f5-18dbae636214-9404487.jpg",alt:"image"}})]),v._v(" "),e("h4",{attrs:{id:"group-by-having"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group-by-having"}},[v._v("#")]),v._v(" group by&having")]),v._v(" "),e("p",[v._v("【标准语法】")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名1")]),v._v(" "),e("p",[v._v("from 表格名")]),v._v(" "),e("p",[v._v("[where 条件代码]")]),v._v(" "),e("p",[v._v("group by 字段名1")]),v._v(" "),e("p",[v._v("having 条件代码")])]),v._v(" "),e("p",[v._v("【语法解释】")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("之前学到的筛选操作都是基于整个表去进行的，那如果想要依据某列中的不同类别（比如说不同品牌/不同性别等等）进行分类统计时，就要用到数据分组，在SQL中数据分组是使用GROUP BY子句建立")])]),v._v(" "),e("li",[e("p",[v._v("GROUP BY子句可以包含任意数量的列，因而可以对分组进行多重嵌套，如按照班级和性别进行分组的话，结果中班级A包含男生组和女生组，班级B也包含男生组和女生组")])]),v._v(" "),e("li",[e("p",[v._v("having 子句和where 子句一样用于条件筛选，两者的操作符一致，但不同的是where是在指定分组前对数据进行筛选过滤，而having可以对分组后的数据进行筛选过滤")])]),v._v(" "),e("li",[e("p",[v._v("注意写的子句的顺序不可颠倒，需要严格按照语法的顺序！")])])]),v._v(" "),e("p",[v._v("【注意】")]),v._v(" "),e("ul",[e("li",[v._v("只使用聚合函数不使用group by时是对整张表作聚合运算")]),v._v(" "),e("li",[v._v("此时select后只能写聚合函数不能添加其他字段名")])]),v._v(" "),e("p",[v._v("【group by数据分组】")]),v._v(" "),e("p",[v._v("【题目】")]),v._v(" "),e("p",[v._v("查询每个大洲（continent）和大洲内的国家（name）数量")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("这题需要对数据按照大洲字段分组，我们写出代码group by continent")])]),v._v(" "),e("li",[e("p",[v._v("并对每组的数据进行计数聚合运算，最后显示每个大洲和大洲中的国家数量，写出代码")])]),v._v(" "),e("li",[e("p",[v._v("group by 数据分组类似于excel中的数据透视表功能\n"),e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/5f630bcd-cba0-46a4-9c75-45afa898ec75-9404487.jpg",alt:"img"}})])])]),v._v(" "),e("p",[v._v("【excel数据透视表演示】")]),v._v(" "),e("p",[v._v("需要注意的是使用group by时，select后的字段只能写group by中出现过的字段和聚合函数，否则就会出现错误")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/34629583-9456-45a2-b5ce-e34482bd22de-9404487.jpg",alt:"img"}})]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/96a2c163-b863-4e10-adaf-45b22a7c7a4b-9404487.jpg",alt:"img"}})]),v._v(" "),e("p",[v._v("【having基于聚合运算结果进行筛选】")]),v._v(" "),e("p",[v._v("【题目】")]),v._v(" "),e("blockquote",[e("p",[v._v("查询总人口数量至少为1亿（100000000）的大洲")]),v._v(" "),e("p",[v._v("题目要求对大洲人口数量进行筛选")]),v._v(" "),e("p",[v._v("首先要对数据进行分组写出代码group by continent")]),v._v(" "),e("p",[v._v("然后对分组后的数据进行筛选此时使用having")]),v._v(" "),e("p",[v._v("要对组内的数据人口数量（population）求和进行筛选")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/6c29a459-cb3c-498f-a6a4-d106773a1833-9404487.jpg",alt:"img"}})]),v._v(" "),e("p",[v._v("【总结】")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("常用聚合函数")]),v._v(" "),e("ul",[e("li",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/b177d83e-4777-4d7d-a8f5-18dbae636214-9404487.jpg",alt:"img"}})])])]),v._v(" "),e("li",[e("p",[v._v("标准语法 ​")])])]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名1")]),v._v(" "),e("p",[v._v("from 表格名")]),v._v(" "),e("p",[v._v("[where 条件代码]")]),v._v(" "),e("p",[v._v("group by 字段名1")]),v._v(" "),e("p",[v._v("having 条件代码")])]),v._v(" "),e("h3",{attrs:{id:"主知识点四-order-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主知识点四-order-by"}},[v._v("#")]),v._v(" 主知识点四：order by")]),v._v(" "),e("p",[v._v("【总结】")]),v._v(" "),e("p",[v._v("【标准语法】")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名1")]),v._v(" "),e("p",[v._v("from 表格名")]),v._v(" "),e("p",[v._v("[where 条件代码]")]),v._v(" "),e("p",[v._v("[group by 字段名1]")]),v._v(" "),e("p",[v._v("[having 条件代码]")]),v._v(" "),e("p",[v._v("order by 字段名 asc|desc")])]),v._v(" "),e("h3",{attrs:{id:"主知识点五-limit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主知识点五-limit"}},[v._v("#")]),v._v(" 主知识点五：limit")]),v._v(" "),e("h4",{attrs:{id:"【查询结果返回前n行】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【查询结果返回前n行】"}},[v._v("#")]),v._v(" 【查询结果返回前n行】####")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名1")]),v._v(" "),e("p",[v._v("from 表格名")]),v._v(" "),e("p",[v._v("[where 条件代码]")]),v._v(" "),e("p",[v._v("[group by 字段名1]")]),v._v(" "),e("p",[v._v("[having 条件代码]")]),v._v(" "),e("p",[v._v("[order by 字段名 asc|desc]")]),v._v(" "),e("p",[v._v("limit n")])]),v._v(" "),e("h4",{attrs:{id:"【查询结果返回x-1行到x-y行】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【查询结果返回x-1行到x-y行】"}},[v._v("#")]),v._v(" 【查询结果返回x+1行到x+y行】####")]),v._v(" "),e("blockquote",[e("p",[v._v("select 字段名1")]),v._v(" "),e("p",[v._v("from 表格名")]),v._v(" "),e("p",[v._v("[where 条件代码]")]),v._v(" "),e("p",[v._v("[group by 字段名1]")]),v._v(" "),e("p",[v._v("[having 条件代码]")]),v._v(" "),e("p",[v._v("[order by 字段名 asc|desc]")]),v._v(" "),e("p",[v._v("limit x,y")])]),v._v(" "),e("p",[v._v("[题目]")]),v._v(" "),e("p",[v._v("翻译成人话就是查询第6行到第10行的数据，共5行")]),v._v(" "),e("blockquote",[e("p",[v._v("select *")]),v._v(" "),e("p",[v._v("from employees")]),v._v(" "),e("p",[v._v("limit 5,5")])]),v._v(" "),e("h3",{attrs:{id:"主知识点五-子查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主知识点五-子查询"}},[v._v("#")]),v._v(" 主知识点五：子查询")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("子查询本身就是一个完整的查询语句，然后用括号（）包裹嵌套在主查询语句中，子查询可以多层嵌套。")])]),v._v(" "),e("li",[e("p",[v._v("之前所涉及到的都是从数据库中检索数据的单条语句，但当我们想要检索的数据并不能直接从数据库表中获取，而是需要从筛选后的表格中再度去查询时，就要用到子查询，相当于我们无法直达时，需要进行换乘")])]),v._v(" "),e("li",[e("p",[v._v("子查询的执行优先于主查询执行，因为主查询的条件用到了子查询的结果。")]),v._v(" "),e("p",[v._v("【题目】")])])]),v._v(" "),e("blockquote",[e("p",[v._v("查询跟阿尔及尼亚（Argentina）和澳大利亚（Australia）在同一大洲的所有国家名称， 并按照国家名称进行排序展示。")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/d23dfb87-df22-4b38-9589-74711ba7eefd-9404487.jpg",alt:"img"}})]),v._v(" "),e("p",[v._v("【总结】")]),v._v(" "),e("blockquote",[e("ul",[e("li",[v._v("子查询本身是一个完整的查询，由括号包裹嵌套在主查询中")]),v._v(" "),e("li",[v._v("子查询最后返回查询出的结果给主查询")]),v._v(" "),e("li",[v._v("子查询可以在select，from，where，having子句中使用，但要注意不同子句能接受的子查询种类有差别")]),v._v(" "),e("li",[v._v("子查询可以多重嵌套")])])])])}),[],!1,null,null,null);_.default=p.exports}}]);