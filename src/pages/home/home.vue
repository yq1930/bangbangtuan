<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="header">
          <img src="../../assets/icon/top-logo.png" alt>
          <Menu mode="horizontal" active-name="1">
            <Submenu name="1">
              <template slot="title">产品</template>
              <MenuItem name="1-1">网络爬虫</MenuItem>
              <MenuItem name="1-2">微博采集</MenuItem>
              <MenuItem name="1-3">分词工具</MenuItem>
              <MenuItem name="1-4">天据软件</MenuItem>
              <MenuItem name="1-5">Python爬虫</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">服务</template>
              <MenuItem name="2-1">快捷采集</MenuItem>
              <MenuItem name="2-2">代采数据</MenuItem>
              <MenuItem name="2-3">规则市场</MenuItem>
              <MenuItem name="2-4">城市要素库</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">购买</template>
              <MenuItem name="3-1">网络爬虫</MenuItem>
              <MenuItem name="3-2">更多产品</MenuItem>
              <MenuItem name="3-3">定制服务</MenuItem>
            </Submenu>
            <MenuItem name="4" class="nav-study">教程</MenuItem>
            <MenuItem name="5" class="nav-community">社区</MenuItem>
          </Menu>
          <div class="h-sign">
            <p>
              登录会员中心
              <span>|</span>
            </p>
          </div>
          <div class="h-reg">
            <p>
              注册
              <span>|</span>
            </p>
          </div>
          <div class="h-service">
            <Button>定制服务</Button>
          </div>
        </div>
      </Header>
      <Content>
        <div class="content">
          <div class="c-help">
            <p>小白轻松采数据——选择想要的数据、输入网址、点击获取数据
              <Icon type="ios-help-circle"/>
            </p>
          </div>
          <div class="c-nav-bread">
            <Breadcrumb separator=">">
              <BreadcrumbItem to="/">资源</BreadcrumbItem>
              <BreadcrumbItem to="/">数据DIY</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="c-labels">
            <div class="lab-sort">
              <h3>类别:</h3>
              <div class="sort-num" :class="{ active: isActive }">
                <ul>
                  <li>
                    <Badge text="热">
                      <Button>热门网站</Button>
                    </Badge>
                  </li>
                  <li>
                    <Button>科研学术</Button>
                  </li>
                  <li>
                    <Button>房地产</Button>
                  </li>
                  <li>
                    <Button>社交</Button>
                  </li>
                  <li>
                    <Button>电商</Button>
                  </li>
                  <li>
                    <Button>汽车</Button>
                  </li>
                  <li>
                    <Button>法律</Button>
                  </li>
                  <li>
                    <Button>生活服务</Button>
                  </li>
                  <li>
                    <Button>视频</Button>
                  </li>
                  <li>
                    <Button>新闻</Button>
                  </li>
                  <li>
                    <Button>金融</Button>
                  </li>
                  <li>
                    <Button>酒店</Button>
                  </li>
                  <li>
                    <Button>旅游</Button>
                  </li>
                  <li>
                    <Button>论坛贴吧</Button>
                  </li>
                  <li>
                    <Button>招聘</Button>
                  </li>
                  <li>
                    <Button>彩票</Button>
                  </li>
                  <li>
                    <Button>图片</Button>
                  </li>
                </ul>
              </div>
              <div class="sort-more" @click="isShow()" :class="{ activeClass: isActive }">更多
                <Icon type="md-arrow-dropdown"/>
                <Icon type="md-arrow-dropup"/>
              </div>
            </div>
            <!--网站  -->
            <div class="lab-web">
              <h3>网站:</h3>
              <div class="web-tags">
                <ul>
                  <li>
                    <Button>新闻</Button>
                  </li>
                  <li>
                    <Button>豆瓣</Button>
                  </li>
                  <li>
                    <Button>知网</Button>
                  </li>
                  <li>
                    <Button>知乎</Button>
                  </li>
                  <li>
                    <Button>微信</Button>
                  </li>
                  <li>
                    <Button>新浪微博</Button>
                  </li>
                  <li>
                    <Button>携程网</Button>
                  </li>
                  <li>
                    <Button>安居客</Button>
                  </li>
                  <li>
                    <Button>天猫</Button>
                  </li>
                  <li>
                    <Button>赶集网</Button>
                  </li>
                  <li>
                    <Button>58同城房产</Button>
                  </li>
                </ul>
              </div>
              <div class="sort-more">更多
                <Icon type="md-arrow-dropdown"/>
              </div>
            </div>
            <!-- 页面 -->
            <div class="lab-page" :class="{ active: isActiveClass }">
              <h3>页面:</h3>
              <div class="page-num">
                <ul>
                  <li>
                    <Button>新浪微博点赞数据采集</Button>
                  </li>
                  <li>
                    <Button>TA点赞过的微博数据</Button>
                  </li>
                  <li>
                    <Button>新浪微博关键词搜索博主</Button>
                  </li>
                  <li>
                    <Button>新浪微博博主主页</Button>
                  </li>
                  <li>
                    <Button>微博关键词搜索结果</Button>
                  </li>
                  <li>
                    <Button>微博转发&评论内容</Button>
                  </li>
                  <li>
                    <Button>微博话题广场</Button>
                  </li>
                  <li>
                    <Button>微博粉丝与关注者资料</Button>
                  </li>
                  <li>
                    <Button>微博博主详细资料</Button>
                  </li>
                  <li>
                    <Button>新浪微博发现-找人列表用户信息</Button>
                  </li>
                  <li>
                    <Button>新浪微博话题粉丝</Button>
                  </li>
                  <li>
                    <Button>新浪微博发现_热门微博榜单</Button>
                  </li>
                  <li>
                    <Button>新浪微博发现_热门话题榜单</Button>
                  </li>
                  <li>
                    <Button>新浪微博文章搜索</Button>
                  </li>
                  <li>
                    <Button>微博博主介绍信息</Button>
                  </li>
                </ul>
              </div>
              <div class="page-more" @click="isPage()" :class="{ activeClass: isActiveClass }">更多
                <Icon type="md-arrow-dropdown"/>
                <Icon type="md-arrow-dropup"/>
              </div>
            </div>
            <!-- 搜索 -->
            <div class="sort-search">
              <h3>搜索:</h3>
              <div class="search">
                <Input search enter-button placeholder="如:天猫,微博"/>
                <p>热门:微博,知乎,豆瓣,京东,天猫</p>
              </div>
              <div class="raiders">
                <p>必看!新浪微博数据采集攻略</p>
              </div>
            </div>
          </div>
          <!-- 获取数据 -->
          <div class="c-cust">
            <div></div>
            <p>
              没有想要的数据？
              <span>可定制</span>
            </p>
          </div>
          <div class="c-title-bread">
            <p>你当前选择的页面是:</p>
            <Breadcrumb separator=">">
              <BreadcrumbItem to="/">热门网站</BreadcrumbItem>
              <BreadcrumbItem to="/">新浪微博</BreadcrumbItem>
              <BreadcrumbItem to="/">TA点赞过的微博数据</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="c-retrieve-data">
            <div class="data">
              <Input v-model="value" placeholder="请按照下面的步骤,输入您要采集的网址"/>
              <div class="data-select">页数:
                <Select v-model="model1">
                  <Option
                    v-for="item in numberList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>页
              </div>
              <div class="data-btn">
                <Button>获取数据</Button>
              </div>
              <div class="web-btn">
                <Button>输入多条网址</Button>
              </div>
              <p>查看我的数据</p>
            </div>
            <div class="data-case">
              <p>1. 点击打开示例页面： https://weibo.com/p/1002061699432410/home?profile_ftype=1&is_all=1#_0</p>
              <p>2. 把与示例页面具有相同网页结构的网址添加到输入框
                <Icon type="ios-help-circle"/>
              </p>
            </div>
          </div>
          <div class="c-sample">
            <div class="sample-box">
              <p>TA点赞过的微博数据（以下为示例数据）</p>
              <p>有问题，这里跟帖
                <Icon type="ios-help-circle"/>
              </p>
            </div>
            <div class="sample-tabs">
              <Table :columns="columns1" :data="data1" width="100%" height="auto"></Table>
            </div>
          </div>
          <div class="c-custom">
            <div class="custom-left">
              <div class="left-p">
                <p>数据定制</p>
                <p>我有特殊需求？</p>
                <p>集搜客帮您定制！</p>
              </div>
              <Icon type="ios-cog"/>
            </div>
            <div class="custom-center">
              <div class="center-p">
                <p>数据DIY</p>
                <p>我想用现成爬虫？</p>
                <p>数据DIY，自己动手！</p>
              </div>
              <Icon type="ios-color-palette"/>
            </div>
            <div class="custom-right">
              <div class="right-p">
                <p>规则市场</p>
                <p>我想自己跑规则？</p>
                <p>规则市场，自己下！</p>
              </div>
              <Icon type="ios-globe"/>
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        <div class="footer-top">
          <div class="top-box">
            <div class="t-logo">
              <img src="../../assets/icon/ad_bottom.png" alt>
              <p>MetaSeeker盛大升级</p>
            </div>
            <div class="t-home">
              <p>首页</p>
              <p>产品</p>
              <p>资源</p>
              <p>教程</p>
              <p>社区</p>
            </div>
            <div class="t-home">
              <p>支持</p>
              <p>常见问题</p>
              <p>视频教程</p>
              <p>速查手册</p>
              <p>旧版社区</p>
            </div>
            <div class="t-home">
              <p>关于</p>
              <p>公司简介</p>
              <p>产品功能</p>
              <p>服务购买</p>
              <p>联系方式</p>
            </div>
            <div class="t-home">
              <p>联系</p>
              <p>邮箱：info@gooseeker.com</p>
              <p>热线1：0755-86528616</p>
              <p>热线2：0755-26021359</p>
              <p>
                咨询：
                <img src="../../assets/icon/qq.png" alt>
              </p>
            </div>
            <div class="t-weixin">
              <img src="../../assets/icon/weixin.png" alt>
              <p>关注官方微信</p>
            </div>
          </div>
          <p class="t-company">V8.9 版权所有 © 2007-2016 GooSeeker 深圳市天据电子商务有限公司</p>
        </div>
        <div class="footer-bottom">
          <div class="bottom-box">
            <p>粤ICP备08108565号-1</p>
            <img src="../../assets/icon/gov_1.png" alt>
            <img src="../../assets/icon/gov_2.png" alt>
            <p>粤公网安备 44030502000239号-1</p>
          </div>
        </div>
      </Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      isActive: false,
      isActiveClass: false,
      numberList: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "5",
          label: "5"
        },
        {
          value: "10",
          label: "10"
        },
        {
          value: "20",
          label: "20"
        },
        {
          value: "50",
          label: "50"
        },
        {
          value: "100",
          label: "100"
        },
        {
          value: "all",
          label: "全部"
        }
      ],
      model1: "1",
      columns1: [
        {
          title: "博主",
          key: "name",
          width: 100
        },
        {
          title: "简介",
          key: "age",
          width: 100
        },
        {
          title: "被点赞博主名称",
          key: "address",
          width: 150
        },
        {
          title: "被点赞博主链接",
          key: "link",
          width: 200
        },
        {
          title: "博文",
          key: "hirobumi",
          width: 100
        },
        {
          title: "发布时间",
          key: "data",
          width: 150
        },
        {
          title: "博文独立网址",
          key: "address_blog",
          width: 200
        },
        {
          title: "发布终端",
          key: "terminal",
          width: 100
        },
        {
          title: "转发数",
          key: "number_forwarding",
          width: 100
        },
        {
          title: "评论数",
          key: "number_comments",
          width: 100
        },
        {
          title: "点赞数",
          key: "number_like",
          width: 100
        },
        {
          title: "转发_博主名称",
          key: "forward_name",
          width: 150
        },

        {
          title: "转发_博主主页",
          key: "forward_home",
          width: 240
        },
        {
          title: "转发_博文内容",
          key: "forward_content",
          width: 200
        },
        {
          title: "转发_发布时间",
          key: "forward_data",
          width: 200
        },
        {
          title: "转发_博文独立网址",
          key: "forward_address",
          width: 200
        },

        {
          title: "转发_发布终端",
          key: "forward_terminal",
          width: 150
        },
        {
          title: "转发_转发数",
          key: "forward_number",
          width: 150
        },
        {
          title: "转发_评论数",
          key: "forward_comments",
          width: 150
        },
        {
          title: "转发_点赞数",
          key: "forward_likes",
          width: 150
        },
        {
          title: "EXPORTFLAG",
          key: "EXPORTFLAG",
          width: 150
        },
        {
          title: "status",
          key: "status",
          width: 150
        }
      ],
      data1: [
        {
          name: "新华视",
          age: "新华社",
          address: "新华视点",
          link: " https://weibo.com/xinhua",
          hirobumi: "【《棒",
          data: "2012-11-28 21",
          address_blog: "https://weibo.com/16",
          terminal: "享拍微博通",
          number_forwarding: "转发 3176",
          number_comments: "评论 1397",
          number_like: "36",
          forward_name: "新华视点",
          forward_home: "https://weibo.com/xinhuashidian",
          forward_content: "16年前的今天，小平走了。 ​​​​",
          forward_data: "2013-02-19 16:21",
          forward_address: "/1699432410/zjUswalXc",
          forward_terminal: "媒体版微博",
          forward_number: "1446",
          forward_comments: "411",
          forward_likes: "25",
          EXPORTFLAG: "",
          status: "0"
        }
      ]
    };
  },
  methods: {
    isShow() {
      this.isActive = !this.isActive;
    },
    isPage() {
      this.isActiveClass = !this.isActiveClass;
    }
  }
};
</script>
<style lang="scss">
.layout {
  .ivu-layout {
    .ivu-layout-header {
      padding: 0;
      width: 100%;
      height: 64px;
      background-color: #f9f9f9;
      border-bottom: 1px solid #ddd;
      box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
      .header {
        width: 1200px;
        height: 64px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .ivu-menu-light {
          background: none;
          margin-left: 100px;
          .ivu-menu-submenu {
            border-bottom: 0;
            border-left: 1px solid #ebebeb;
            width: 116px;
            text-align: center;
            .ivu-menu-submenu-title {
              font-size: 16px;
              color: #335959;
              .ivu-icon {
                position: fixed;
                z-index: 9999;
                top: 1000px;
              }
            }
            .ivu-menu-submenu-title:hover {
              color: #20a56e;
            }
          }
          .ivu-menu-opened {
            border-top: 3px solid #20a56e;
          }
          .ivu-menu-item {
            border-left: 1px solid #ebebeb;
            width: 116px;
            text-align: center;
          }
          .ivu-menu-item:hover {
            color: #20a56e;
            background: none;
          }
          .nav-study {
            border-left: 1px solid #ebebeb;
          }
          .nav-study:hover,
          .nav-community:hover {
            border-top: 3px solid #20a56e;
            border-bottom: 0;
            color: #20a56e;
          }
          .nav-community {
            border-right: 1px solid #ebebeb;
          }
          .ivu-menu-item-active,
          .ivu-menu-item-selected {
            border-bottom: 0;
            color: #20a56e;
          }
        }
        .ivu-menu-horizontal.ivu-menu-light:after {
          background: none;
        }
        .h-product {
          border-top: 0;
        }
        .h-sign {
          margin-left: 24px;
          color: #666;
          font-size: 14px;
          p {
            span {
              color: #ccc;
              margin-left: 8px;
            }
          }
        }
        .h-reg {
          color: #666;
          font-size: 14px;
          margin-left: 8px;
          span {
            color: #ccc;
            margin-left: 8px;
          }
        }
        .h-service {
          margin-left: 8px;
          font-size: 14px;
          .ivu-btn {
            background: #20a56e;
            color: #fff;
            border-radius: 2px;
            border-color: #20a56e;
          }
        }
      }
    }
    // 内容
    .ivu-layout-content {
      .content {
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
        .c-help {
          text-align: right;
          margin-top: 24px;
          p {
            color: #009ecc;
            font-size: 16px;
            font-weight: 500;
          }
        }
        .c-labels {
          width: 100%;
          height: 100%;
          background: #fff;
          border: 2px solid #eee;
          margin-top: 10px;
          .lab-sort,
          .lab-page,
          .lab-web {
            display: flex;
            justify-content: space-between;
            padding: 30px 40px 0 40px;
            h3 {
              text-align: center;
              line-height: 50px;
            }
            .sort-num,
            .page-num,
            .web-tags {
              width: 1000px;
              ul {
                list-style: none;
                li {
                  display: inline-block;
                  margin-left: 10px;
                  margin-top: 10px;
                  .ivu-btn {
                    border: 0;
                    border-radius: 0;
                    color: #666;
                    background: #f6f6f6;
                    border: 1px solid #f2f2f2;
                  }
                }
                li:nth-of-type(n + 14) {
                  display: none;
                }
                li:nth-of-type(1) {
                  .ivu-badge {
                    .ivu-badge-count {
                      border-radius: 0;
                    }
                  }
                }
              }
            }
            .sort-num {
              ul {
                li:nth-of-type(1) {
                  .ivu-btn {
                    color: #0083cc;
                    background-color: #e7f6ff;
                    border: 1px solid #d6ecf9;
                  }
                }
              }
            }
            .active {
              ul {
                li:nth-of-type(n + 14) {
                  display: inline-block;
                }
              }
            }
            .sort-more,
            .page-more {
              text-align: center;
              line-height: 50px;
              .ivu-icon {
                border: 1px solid #ccc;
              }
              .ivu-icon:nth-of-type(2) {
                display: none;
              }
            }
            .activeClass {
              .ivu-icon {
                border: 1px solid #ccc;
              }
              .ivu-icon:nth-of-type(1) {
                display: none;
              }
              .ivu-icon:nth-of-type(2) {
                display: inline-block;
              }
            }
          }
          .lab-web {
            .web-tags {
              ul {
                li:nth-of-type(6) {
                  .ivu-btn {
                    color: #0083cc;
                    background-color: #e7f6ff;
                    border: 1px solid #d6ecf9;
                  }
                }
              }
            }
          }
          .page-num {
            ul {
              li:nth-of-type(n + 7) {
                display: none;
              }
              li:nth-of-type(2) {
                .ivu-btn {
                  color: #0083cc;
                  background-color: #e7f6ff;
                  border: 1px solid #d6ecf9;
                }
              }
              li:nth-of-type(6) {
                .ivu-btn {
                  color: #0083cc;
                  background-color: #e7f6ff;
                  border: 1px solid #d6ecf9;
                }
              }
              li:nth-of-type(n + 4) {
                .ivu-btn {
                  color: #48a944;
                  background-color: #ecf8e7;
                  border: 1px solid #c5e8c3;
                }
              }
              li:nth-of-type(n + 10) {
                .ivu-btn {
                  border: 0;
                  border-radius: 0;
                  color: #666;
                  background: #f6f6f6;
                  border: 1px solid #f2f2f2;
                }
              }
            }
          }

          .active {
            ul {
              li:nth-of-type(n + 7) {
                display: inline-block;
              }
            }
          }
          .sort-search {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 40px 40px 40px;
            .search {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 870px;
              .ivu-input-group {
                width: 210px;
              }
              p {
                margin-left: 10px;
                font-size: 14px;
                color: #666;
              }
            }
            .raiders {
              p {
                font-size: 14px;
                font-weight: bold;
                color: #0083cc;
                text-decoration: underline;
              }
            }
          }
        }
        // 数据定制
        .c-cust {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          p {
            font-size: 14px;
            span {
              color: #0083cc;
            }
          }
        }
        .c-title-bread {
          background: #e7f6ff;
          border: 2px solid #d6ecf9;
          border-bottom: 0;
          color: #444;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 14px;
          padding: 4px;
          .ivu-breadcrumb {
            margin-left: 10px;
            span {
              a {
                color: #0083cc;
              }
            }
          }
        }
        .c-retrieve-data {
          background: #fff;
          height: 120px;
          border: 2px solid #eee;
          border-top: 0;
          height: auto;
          padding-top: 40px;
          padding-left: 116px;
          padding-bottom: 20px;
          .data {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .ivu-input-wrapper {
              width: 460px;
              .ivu-input {
                border-radius: 0;
              }
            }
            .data-select {
              margin-left: 14px;
              .ivu-select {
                width: 70px;
                .ivu-select-selection {
                  width: 70px;
                }
              }
            }
            .data-btn,
            .web-btn {
              margin-left: 14px;
              .ivu-btn {
                background: #20a56e;
                color: #fff;
                border-radius: 0;
              }
            }
            p {
              color: #0083cc;
              font-size: 14px;
              margin-left: 14px;
            }
          }
          .data-case {
            p {
              margin-top: 14px;
              font-size: 14px;
            }
          }
        }
        .c-sample {
          margin-top: 40px;
          border: 2px solid #eee;
          background: #fff;
          .sample-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            padding: 4px;
          }
          .sample-tabs {
            width: 100%;
            height: 100%;
            .ivu-table-wrapper {
              border-left: 0;
              border-right: 0;
            }
          }
        }
        .c-custom {
          background: #e6e6e6;
          margin-top: 40px;
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 60px;
          .custom-left,
          .custom-center,
          .custom-right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left-p,
            .center-p,
            .right-p {
              p {
                font-size: 18px;
              }
              p:nth-of-type(2) {
                margin-top: 10px;
              }
            }
            .ivu-icon {
              font-size: 80px;
              color: #ccc;
            }
          }
        }
      }
    }
    // 底部
    .ivu-layout-footer {
      padding: 0;
      .footer-top {
        background: #333;
        padding: 30px;
        .top-box {
          width: 1200px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between;
          align-items: top;
          .t-logo {
            text-align: center;
            p {
              color: #fff;
            }
          }
          .t-home {
            p {
              color: #fff;
            }
            p:nth-of-type(n + 2) {
              margin-top: 10px;
            }
          }
          .t-weixin {
            text-align: center;
            color: #fff;
          }
        }
        .t-company {
          text-align: center;
          color: #fff;
        }
      }
      .footer-bottom {
        background: #ccc;
        .bottom-box {
          width: 1200px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          img:nth-of-type(1) {
            margin-left: 30px;
            margin-right: 30px;
          }
        }
      }
    }
  }
}
</style>
