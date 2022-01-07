<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll
      ref="scroll"
      :probeType="3"
      @scroll="scroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-banner :banners="banners"></home-banner>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import GoodsList from "components/content/goods/GoodsList";
import TabControl from "components/content/tabControl/TabControl";
import BackTop from "components/content/backTop/BackTop";

import HomeBanner from "./childComps/HomeBanner";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeBanner,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  data() {
    return {
      banners: [
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
          link: "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
          link: "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
          link: "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
          link: "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        },
      ],
      recommends: [
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
          link: "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          title: "十点抢券",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
          link: "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          title: "好物特卖",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
          link: "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          title: "内购福利",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
          link: "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          title: "初秋上新",
        },
      ],
      goods: {
        pop: {
          page: 1,
          list: [
            {
              title:
                "新款打底裤女裤外穿显瘦高腰紧身黑色九分小脚铅笔春秋冬加绒加厚",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/190514_2jch323fl930l74l307c3gg6kh00b_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 3573,
              price: 39.9,
            },
            {
              title:
                "ins侃爷同款黑武士灰白椰子鞋复古情侣厚底老爹鞋运动男女跑鞋",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/210724_3253hkfj2jhj76fkg7dll9h6ai1k0_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 9,
              price: 188,
            },
            {
              title: "秋冬新款轻熟女人味套装小香风针织毛衣阔腿裤两件套时尚洋气",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/55cf19/210817_7bk7ejcjj5cl806dhj46ab07786bl_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 50,
              price: 184.29,
            },
            {
              title:
                "秋冬加绒加厚新款打底裤女外穿显瘦高腰保暖棉裤子黑色小脚魔术裤",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/210810_10281h12eiegei25248ekg416b2e7_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 249,
              price: 39.8,
            },
            {
              title:
                "雪尼尔加绒阔腿裤女秋冬新款百搭宽松高腰垂感休闲直筒灯芯绒裤",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/211124_0ecg0kjca25911gff4ibh5gg81j50_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 11,
              price: 79.8,
            },
            {
              title: "西装裤女2021秋冬新款高腰宽松显瘦微喇叭裤黑色垂感休闲长裤",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/55cf19/210925_0ccj324gillh7j6jcfg3af795ij6a_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 33,
              price: 59,
            },
            {
              title: "加绒运动裤女春秋2021新款韩版宽松哈伦裤显瘦束脚卫裤休闲女",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/55cf19/211011_47c749ib3i8d05ba4ffj88l952i74_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 24,
              price: 69,
            },
            {
              title:
                "秋冬季新款复古英伦风感粗花呢料小香西装外套女韩版小众西服上衣",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/211002_0klib95dkd8a982501226cl9kdgkc_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 10,
              price: 119.8,
            },
          ],
        },
        new: {
          page: 1,
          list: [
            {
              title: "高跟方头小短靴女2021秋冬季新款马丁靴法式瘦瘦靴薄款粗跟单",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/55cf19/211009_7bfhc28771klle14f35c13cl0df1h_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 37,
              price: 129,
            },
            {
              title: "2021新款木耳边高领亮丝针织连衣裙女冬装性感修身包臀裙",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/201206_1f5hgd02k2g042f3ck6k8aj6dei5h_749x1000.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 13,
              price: 89.67,
            },
            {
              title:
                "中国风红色卫衣加绒加厚中长款连帽上衣女冬洋气时尚百搭大码外套",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/55cf19/211218_24ch2123fi5acjidd1kj5ccf04ejk_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 42,
              price: 89,
            },
            {
              title:
                "大码女装冬季套装女新款遮肉显瘦加厚连帽卫衣外套工装裤两件套",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/211124_7481kgh75ck0b2ek727205a54jd65_640x960.png_640x854.v1cAC.40.webp",
              },
              cfav: 187,
              price: 59.92,
            },
          ],
        },
        sell: {
          page: 1,
          list: [
            {
              title:
                "雪尼尔加绒阔腿裤女秋冬新款百搭宽松高腰垂感休闲直筒灯芯绒裤",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/211124_0ecg0kjca25911gff4ibh5gg81j50_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 11,
              price: 79.8,
            },
            {
              title: "西装裤女2021秋冬新款高腰宽松显瘦微喇叭裤黑色垂感休闲长裤",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/55cf19/210925_0ccj324gillh7j6jcfg3af795ij6a_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 33,
              price: 59,
            },
            {
              title: "加绒运动裤女春秋2021新款韩版宽松哈伦裤显瘦束脚卫裤休闲女",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/55cf19/211011_47c749ib3i8d05ba4ffj88l952i74_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 24,
              price: 69,
            },
            {
              title:
                "秋冬季新款复古英伦风感粗花呢料小香西装外套女韩版小众西服上衣",
              show: {
                img: "https://s5.mogucdn.com/mlcdn/c45406/211002_0klib95dkd8a982501226cl9kdgkc_640x960.jpg_640x854.v1cAC.40.webp",
              },
              cfav: 10,
              price: 119.8,
            },
          ],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      this.$refs.scroll.bsScroll.refresh();
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    scroll(position) {
      this.isShowBackTop = -position.y > 655;
    },
    loadMore() {
      console.log("上拉加载更多");
      setTimeout(() => {
        this.$refs.scroll && this.$refs.scroll.finishPullUp();
      }, 2000);
    },
  },
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
}

.wrapper {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>