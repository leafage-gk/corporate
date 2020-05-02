<template>
  <v-content>
    <page-container :items="items">
      <v-container fluid class="ma-4">
        <v-row justify="start" align="center">
          <v-subheader><h2>会社概要</h2></v-subheader>
        </v-row>
        <v-row justify="center" align="center">
          <table class="overview">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>リーフエイジ合同会社</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2019年1月4日</td>
              </tr>
              <tr>
                <th>代表</th>
                <td>杉本 謙仁(スギモト ケント)</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  東京都世田谷区大原2丁目27-11-404号
                </td>
              </tr>
              <tr>
                <th>連絡先</th>
                <td>
                  contact@leafage.co.jp
                </td>
              </tr>
              <tr>
                <th>顧問税理士</th>
                <td>Leaf税理士法人</td>
              </tr>
              <tr>
                <th>業務内容</th>
                <td>
                  <ul>
                    <li>
                      コンピュータシステムの企画、開発、及び保守に関する業務
                    </li>
                    <li>
                      ウェブサイト、アプリケーション制作
                    </li>
                    <li>
                      ホームページ制作（デザイン、コーディング）
                    </li>
                    <li>
                      インターネットを利用した各種情報提供サービス
                    </li>
                    <li>
                      書籍及び印刷物の企画、編集、出版並びに販売
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </v-row>
      </v-container>
    </page-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    PageContainer: () => import('~/components/molecules/PageContainer.vue'),
  },
  data() {
    return {
      items: [
        {
          text: 'TOP',
          to: '/',
        },
        {
          text: '会社概要',
          to: '/company',
        },
      ],
    };
  },
  head: {
    title: '会社概要',
  },
});
</script>

<style lang="scss" scoped>
table.overview {
  margin: 10px;
  color: map-get($grey, darken-3);
  border-collapse: collapse;
  > tbody > tr {
    border-bottom: 1px solid map-get($grey, lighten-2);
    > th,
    > td {
      padding: 10px;
    }
    > th {
      color: map-get($cyan, base);
      text-align: right;
    }
  }
}
</style>
