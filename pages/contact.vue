<template>
  <v-content>
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <form
          name="contact"
          action="/contact_thanks/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          method="POST"
        >
          <v-card-title class="headline grey lighten-2" primary-title>
            お問合せ内容確認
          </v-card-title>
          <v-container fluid>
            <v-row v-for="(item, index) in contactList" :key="index">
              <v-col cols="5" md="4">
                <p class="font-weight-bold text-right">{{ item.label }}</p>
              </v-col>
              <v-col cols="7" md="8">{{ item.value }}</v-col>
            </v-row>
          </v-container>
          <v-divider />
          <v-card-text>
            <v-layout justify-center align-center>
              <vue-recaptcha
                :sitekey="recaptchaKey"
                @verify="verify"
              ></vue-recaptcha>
            </v-layout>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <input type="hidden" name="form-name" value="contact" />
            <input
              v-bind:key="item.name"
              v-for="item in contactList"
              type="hidden"
              :name="item.name"
              :value="item.value"
            />
            <input
              type="hidden"
              name="g-recaptcha-response"
              :value="recaptcha"
            />
            <v-btn :disabled="!verified" color="primary" text type="submit">
              送信
            </v-btn>
            <v-btn color="secondary" text @click="dialog = false">
              キャンセル
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
    <page-container :items="items">
      <v-container fluid class="ma-4">
        <v-row justify="center" align="center">
          <v-subheader><h2>お問合せ</h2></v-subheader>
        </v-row>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" align="center">
            <v-col>
              <v-select
                name="type"
                v-model="select"
                :items="types"
                :rules="[(v) => !!v || '必須項目です。']"
                label="お問合せ種類"
                required
              ></v-select>

              <v-text-field
                name="name"
                v-model="name"
                :rules="nameRules"
                label="お名前"
                placeholder="例：令和 太郎"
                counter="20"
                color="primary"
                required
              ></v-text-field>

              <v-text-field
                name="kana"
                v-model="kana"
                :rules="kanaRules"
                label="ふりがな"
                placeholder="例：れいわ たろう"
                counter="20"
                required
              ></v-text-field>

              <v-text-field
                name="email"
                v-model="email"
                :rules="emailRules"
                label="メールアドレス"
                placeholder="例：rtaro@leafage.co.jp"
                counter="100"
                required
              ></v-text-field>

              <v-text-field
                name="organization"
                v-model="organization"
                label="所属名・会社名"
                placeholder="例：リーフエイジ合同会社"
                counter="20"
              ></v-text-field>

              <v-text-field
                name="phone"
                v-model="phone"
                :rules="phoneRules"
                label="電話番号"
                placeholder="例：03-xxxx-xxxx"
                counter="20"
              ></v-text-field>

              <v-textarea
                name="content"
                v-model="content"
                :rules="contentRules"
                label="お問合せ内容"
                counter="5000"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-btn
              :disabled="!valid"
              color="success"
              class="text-right"
              @click="validate"
            >
              確認
            </v-btn>
          </v-row>
        </v-form>
      </v-container>
    </page-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

import { VuetifyForm } from '~/types/vuetify';

export default Vue.extend({
  components: {
    PageContainer: () => import('~/components/molecules/PageContainer.vue'),
    VueRecaptcha: () => import('vue-recaptcha'),
  },
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [(v: string) => !!v || '必須項目です。'],
      kana: '',
      kanaRules: [(v: string) => !!v || '必須項目です。'],
      email: '',
      emailRules: [
        (v: string) => !!v || '必須項目です。',
        (v: string) =>
          /.+@.+/.test(v) || '正しいメールアドレスを入力してください。',
      ],
      organization: '',
      phone: '',
      phoneRules: [
        (v: string) =>
          v == '' || /^[\d-]+$/.test(v) || '正しい電話番号を入力してください。',
      ],
      select: '',
      types: ['案件のご相談・ご依頼', 'パートナー募集', 'その他お問合せ'],
      content: '',
      contentRules: [(v: string) => !!v || '必須項目です。'],
      dialog: false,
      items: [
        {
          text: 'TOP',
          to: '/',
        },
        {
          text: 'お問合せ',
          to: '/contact',
        },
      ],
      recaptchaKey: process.env.SITE_RECAPTCHA_KEY,
      recaptcha: '',
      verified: false,
    };
  },
  computed: {
    contactList(): { label: string; name: string; value: string }[] {
      return [
        { label: 'お問合せ種類', name: 'type', value: this.select },
        { label: 'お名前', name: 'name', value: this.name },
        { label: 'ふりがな', name: 'kana', value: this.kana },
        { label: 'メールアドレス', name: 'email', value: this.email },
        {
          label: '所属名・会社名',
          name: 'organization',
          value: this.organization,
        },
        { label: '電話番号', name: 'phone', value: this.phone },
        { label: 'お問合せ内容', name: 'content', value: this.content },
      ];
    },
  },
  methods: {
    validate() {
      if ((this.$refs.form as VuetifyForm).validate()) {
        this.dialog = true;
      }
    },
    verify(response: string) {
      this.recaptcha = response;
      this.verified = true;
    },
  },
  head: {
    script: [
      {
        innerHTML: '',
        type: 'text/javascript',
        src:
          '//www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
      },
    ],
    title: 'お問合せ',
  },
});
</script>
