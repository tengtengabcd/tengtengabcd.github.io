(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{521:function(e,t,r){"use strict";r.r(t);var a=r(7),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("一、大数据平台层级结构"),r("br"),e._v("根据大数据平台架构中流入和流出的过程，可以把其分为三层——原始数据层、数据仓库、数据应用层。"),r("br"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/25854249/1648560025174-786005a9-c9ed-4661-8812-c1f816f14f74.png#clientId=ud5547022-094d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=1403&id=uedfc2aa1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1403&originWidth=1125&originalType=binary&ratio=1&rotation=0&showTitle=false&size=425320&status=done&style=none&taskId=ufa769f3c-ef10-4bb0-b95a-14fc460efbc&title=&width=1125",alt:"image.png"}}),r("br"),e._v("1、原始数据层—ODS（Operational Data Store）层"),r("br"),e._v("对数据轻度汇总，一般由客户端操作日志、业务线的数据库和其他来源数据构成。ODS层的表通常包括两类，一类用于存储当前需要加载的数据，另一类用于存储处理完后的历史数据，历史数据一般保存3～6个月后需要清除，以节省空间。ODS层是当前的、不断变化的数据，而数据仓库保留的是历史的、不再变化的数据。"),r("br"),e._v("ODS层数据从数据结构、数据之间的逻辑关系上都与业务系统基本保持一致，查询从ODS层中进行，从而降低了业务系统的查询压力。")]),e._v(" "),r("p",[e._v("通过建模的方式，对数据进行多个模型的处理首先，生成业务模型，主要解决业务方面的分层，然后完成领域模型，基于业务模型的基础进行抽象处理。接着，将领域模型的实体与实体的关系进行数据库层次的逻辑化，也就是所谓的逻辑建模。最后，生成物理模型，用来完成对不同关系型数据库的物理化以及性能等具体技术问题。"),r("br"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/25854249/1648609877300-ae619dcb-e0ea-4b9e-8435-5cf1bf227f5f.png#clientId=u8e863cc5-d85a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=169&id=ua192570f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=169&originWidth=1570&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48629&status=done&style=none&taskId=uf542d63d-d499-416c-acce-713f980bf52&title=&width=1570",alt:"image.png"}}),r("br"),e._v("数据模型的层次划分")]),e._v(" "),r("p",[e._v("2、数据仓库—DW层"),r("br"),e._v("（1）数据仓库内容"),r("br"),e._v("DW层包括DWD层数据明细层、DWM层（数据中间层/主题层）、DWS层（数据服务层）。"),r("br"),e._v("数据来自对ODS层，对数据清洗处理（DWD层）—对数据计算相应的统计指标，方便复用（DWM）—按照主题业务绘制主题宽表（DWS层）"),r("br"),e._v("（2）数据仓库的特点")]),e._v(" "),r("ul",[r("li",[e._v("数据仓库是面向主题的，它会按照一定的主题进行组织。")]),e._v(" "),r("li",[e._v("数据仓库是集成的，数据仓库中的数据可能来源于多个数据源，数据仓库会将需要的数据从中抽取出来，然后进一步转化、清洗，再集成到数据仓库中。")]),e._v(" "),r("li",[e._v("数据仓库是不可更新的，数据仓库主要是为业务提供分析决策的数据，因此，对数据的主要操作都是查询。")])]),e._v(" "),r("p",[e._v("例如，在共享单车的数据仓库设计中，通常根据业务将主题层分为用户主题、车辆主题、支付主题、行程主题等，为了平衡业务前台的快速变化与数据仓库稳定性的需求，在设计主题层的时候，通常要与业务中台保持一致。")]),e._v(" "),r("p",[e._v("3、数据集市"),r("br"),e._v("将主题层和基础层的数据按各业务主题进行聚合，生成宽表和Cube，并直接推送给数据分析和业务部门使用。数据集市由很多非常宽的表组成，比如GMV（网站成交金额）的表、包含订单和金额、SKU（库存量单位）产品信息、用户基本信息等。"),r("br"),e._v("数据集市会根据不同的业务主题划分来满足业务信息需求，一个合格的数据集市应该具备如下特点："),r("br"),e._v("（1）数据集市表是为了解决特定业务需求的，更具有面向主题性。"),r("br"),e._v("（2）在更多情况下，数据集市支持离线数据，在一般情况下，业务经常使用的是T+1数据，即今天看昨天的数据。"),r("br"),e._v("（3）数据来源于多个方面，比如业务订单数据、前端用户使用数据以及外部来源数据等。"),r("br"),e._v("（4）查询时间尽量短，为分析和查询尽快响应。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/25854249/1648608362185-6cada72b-d44e-4a59-bab0-9eeb820b9256.png#clientId=u8e863cc5-d85a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=884&id=u63f5058f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=884&originWidth=964&originalType=binary&ratio=1&rotation=0&showTitle=false&size=512687&status=done&style=none&taskId=ua7ae67ba-de63-476b-8157-e3eaee1a518&title=&width=964",alt:"image.png"}})]),e._v(" "),r("p",[e._v("4、数据的应用"),r("br"),e._v("第一种是描述性分析应用。主要用来描述所关注的业务的数据表现，主要关注事情表面发生了什么，在数据分析之后，把数据可视化展现出来，让用户可以了解业务的发展状况。"),r("br"),e._v("第二种是预测性分析应用。在描述性数据的基础上，根据历史数据情况，在一定的算法和模型的指导下，进一步预测业务的数据趋势。"),r("br"),e._v("第三种是指导性分析应用。基于现有的数据和对未来的预测情况，可以用来指导完成一些业务决策和建议。")])])}),[],!1,null,null,null);t.default=i.exports}}]);