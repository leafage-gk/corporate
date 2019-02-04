<template>
  <v-content>
    <v-container>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      <v-layout align-center justify-center column>
        <v-subheader><h2>会社概要</h2></v-subheader>
        <table class="overview">
          <tbody>
            <tr>
              <th>会社名</th>
              <td>リーフエイジ合同会社</td>
            </tr>
            <tr>
              <th>代表社員</th>
              <td>杉本 謙仁(スギモト ケント)<br />1989年生まれ</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2019年1月4日</td>
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
                    コンピュータシステムの企画、開発、販売及び保守に関する業務
                  </li>
                  <li>
                    ウェブサイトの企画、設計、開発、運営及び販売
                  </li>
                  <li>
                    インターネットを利用した各種情報提供サービス並びに通信販売業務
                  </li>
                  <li>
                    書籍及び印刷物の企画、編集、出版並びに販売
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>沿革</th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>2019年1月4日</td>
                      <td>東京都世田谷区にて、リーフエイジ合同会社を設立</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                東京都世田谷区大原２－２７－１１　ラピス代田橋４F
              </td>
            </tr>
            <tr>
              <th>連絡先</th>
              <td>
                contact@leafage.co.jp
              </td>
            </tr>
            <tr>
              <th>主要取引先</th>
              <td>
                <ul>
                  <li>株式会社NEOPA</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
  head() {
    return {
      title: '会社概要',
    };
  },
});
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/settings/_colors.styl';

.subheader {
  color: $grey.darken-3;
  margin: 10px;
}

table.overview {
  margin: 10px;
  border-collapse: collapse;
  border: 1px solid $lime.lighten-5;
  color: $grey.darken-3;
  > tbody > tr  {
    > th, > td {
      border: 1px solid $lime.lighten-3;
      padding: 10px;
    }
    > th {
      background: $light-green.darken-1;
      color: white;
    }
  }
  th {
    text-align: right;
  }
}
</style>
