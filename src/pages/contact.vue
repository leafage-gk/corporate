<template>
  <v-main>
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <form
          name="contact"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
        >
          <v-card-title class="headline grey lighten-2" primary-title>
            お問合せ内容確認
          </v-card-title>
          <v-container fluid>
            <template v-for="(item, index) in contactList">
              <v-row v-if="item.show" :key="index">
                <v-col cols="5" md="4">
                  <p class="font-weight-bold text-right">{{ item.label }}</p>
                </v-col>
                <v-col
                  cols="7"
                  md="8"
                  style="word-wrap: break-word; white-space: pre-line;"
                >
                  {{ item.value }}
                </v-col>
              </v-row>
            </template>
          </v-container>
          <v-divider />
          <v-card-text>
            <div class="g-recaptcha" :data-sitekey="recaptchaKey"></div>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <template v-for="item in contactList">
              <input
                v-bind:key="item.name"
                v-if="item.hidden"
                type="hidden"
                :name="item.name"
                :value="item.value"
              />
            </template>
            <!-- <input type="hidden" name="debug" value="1" /> -->
            <input
              type="hidden"
              name="captcha_settings"
              value='{"keyname":"leafage","fallback":"true","orgId":"00D2x00000750Zd","ts":""}'
            />
            <input type="hidden" name="oid" value="00D2x00000750Zd" />
            <input
              type="hidden"
              name="retURL"
              value="https://leafage.co.jp/contact_thanks"
            />
            <v-btn color="primary" text type="submit">
              送信
            </v-btn>
            <v-btn color="secondary" text @click="dialog = false">
              キャンセル
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
    <page-container :items="items" justify="center">
      <v-col cols="12" lg="8" xl="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" align="center">
            <v-subheader><h2>お問合せ</h2></v-subheader>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <v-select
                name="type"
                v-model="select"
                :items="types"
                :rules="[(v) => !!v || '必須項目です。']"
                label="お問合せ種類"
                required
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                name="last_name"
                v-model="lastName"
                :rules="lastNameRules"
                label="姓"
                counter="40"
                color="primary"
                hide-details
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                name="first_name"
                v-model="firstName"
                :rules="firstNameRules"
                label="名"
                counter="80"
                hide-details
                required
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                name="email"
                v-model="email"
                :rules="emailRules"
                label="メールアドレス"
                counter="80"
                hide-details
                required
                dense
                prepend-icon="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                name="phone"
                v-model="phone"
                :rules="phoneRules"
                label="電話番号"
                counter="40"
                hide-details
                dense
                prepend-icon="phone"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                name="company"
                v-model="company"
                label="所属名・会社名"
                counter="40"
                hide-details
                dense
                prepend-icon="business"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                name="description"
                v-model="description"
                label="お問合せ内容"
                counter="5000"
                hide-details
                dense
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-btn
              :disabled="!valid"
              large
              color="secondary"
              class="ma-10 px-10"
              @click="validate"
            >
              確認
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </page-container>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue';

import { VuetifyForm } from '~/types/vuetify';

interface ContactInfo {
  label: string;
  name: string;
  value: string;
  show: boolean;
  hidden: boolean;
}

export default Vue.extend({
  components: {
    PageContainer: () => import('~/components/molecules/PageContainer.vue'),
  },
  data() {
    return {
      valid: true,
      firstName: '',
      firstNameRules: [(v: string) => !!v || '必須項目です。'],
      lastName: '',
      lastNameRules: [(v: string) => !!v || '必須項目です。'],
      email: '',
      emailRules: [
        (v: string) => !!v || '必須項目です。',
        (v: string) =>
          /.+@.+/.test(v) || '正しいメールアドレスを入力してください。',
      ],
      company: '',
      phone: '',
      phoneRules: [
        (v: string) =>
          v == '' || /^[\d-]+$/.test(v) || '正しい電話番号を入力してください。',
      ],
      select: '',
      types: ['案件のご相談・ご依頼', 'パートナー募集', 'その他お問合せ'],
      description: '',
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
      timestamp: null as NodeJS.Timeout | null,
      scripts: [] as { innerHTML: string; type: string; src: string }[],
    };
  },
  computed: {
    campaignId(): string {
      if (this.select === '案件のご相談・ご依頼') {
        return '7012x000000p2S5';
      }
      if (this.select === 'パートナー募集') {
        return '7012x000000p2S0';
      }
      return '';
    },
    contactList(): ContactInfo[] {
      return [
        {
          label: 'お問合せ種類',
          name: 'select',
          value: this.select,
          show: true,
          hidden: false,
        },
        {
          label: '姓',
          name: 'last_name',
          value: this.lastName,
          show: true,
          hidden: true,
        },
        {
          label: '名',
          name: 'first_name',
          value: this.firstName,
          show: true,
          hidden: true,
        },
        {
          label: 'メールアドレス',
          name: 'email',
          value: this.email,
          show: true,
          hidden: true,
        },
        {
          label: '所属名・会社名',
          name: 'company',
          value: this.company,
          show: true,
          hidden: true,
        },
        {
          label: '電話番号',
          name: 'phone',
          value: this.phone,
          show: true,
          hidden: true,
        },
        {
          label: 'リードソース',
          name: 'lead_source',
          value: 'Web',
          show: false,
          hidden: true,
        },
        {
          label: 'お問合せ内容',
          name: 'descriptionShow',
          value: this.description,
          show: true,
          hidden: false,
        },
        {
          label: 'お問合せ内容',
          name: 'description',
          value: `${this.select}\n\n${this.description}`,
          show: false,
          hidden: true,
        },
        {
          label: 'キャンペーン',
          name: 'Campaign_ID',
          value: this.campaignId,
          show: false,
          hidden: !!this.campaignId,
        },
      ];
    },
  },
  beforeDestroy() {
    if (this.timestamp) {
      clearInterval(this.timestamp);
    }
  },
  methods: {
    validate() {
      if ((this.$refs.form as VuetifyForm).validate()) {
        this.dialog = true;
        this.recaptchaSetup();
        this.scripts = [
          {
            innerHTML: '',
            type: 'text/javascript',
            src: 'https://www.google.com/recaptcha/api.js',
          },
        ];
      }
    },
    recaptchaSetup() {
      const timestamp = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = document.getElementById('g-recaptcha-response');
        if (response === null || response.value.trim() == '') {
          const elems = JSON.parse(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (document.getElementsByName('captcha_settings') as any)[0].value,
          );
          elems['ts'] = JSON.stringify(new Date().getTime());
          (document.getElementsByName(
            'captcha_settings',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ) as any)[0].value = JSON.stringify(elems);
        }
      };
      this.timestamp = setInterval(timestamp, 500);
    },
  },
  head() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      script: (this as any).scripts,
      title: 'お問合せ',
      link: [
        {
          rel: 'canonical',
          href: 'https://leafage.co.jp/contact',
          id: 'canonical',
        },
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://leafage.co.jp/contact',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'お問合わせ',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'お問合せ',
        },
      ],
    };
  },
});
</script>
