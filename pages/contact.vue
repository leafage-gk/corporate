<template>
  <v-content>
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          お問合せ内容確認
        </v-card-title>
        <v-data-table :items="contactList" hide-actions hide-headers>
          <template slot="items" slot-scope="props">
            <th>{{ props.item.label }}</th>
            <td>{{ props.item.value }}</td>
          </template>
        </v-data-table>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="sendContact">
            送信
          </v-btn>
          <v-btn color="secondery" flat @click="dialog = false">
            キャンセル
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="complete" width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          お問合せ完了
        </v-card-title>
        <v-card-text>
          お問合せ誠にありがとうございます。3営業日以内に担当者から返信させていただきます。少々お待ち下さい。
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="complete = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <v-layout row wrap class="my-5" align-center>
        <v-flex xs12>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || '必須項目です。']"
              label="お問合せ種類"
              required
            ></v-select>

            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="お名前"
              placeholder="例：橘 聖"
              counter="20"
              color="primary"
              required
            ></v-text-field>

            <v-text-field
              v-model="kana"
              :rules="kanaRules"
              label="ふりがな"
              placeholder="例：たちばな ひじり"
              counter="20"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="メールアドレス"
              placeholder="例：t_hiziri@leafage.co.jp"
              counter="100"
              required
            ></v-text-field>

            <v-text-field
              v-model="organization"
              label="所属名・会社名"
              placeholder="例：リーフエイジ合同会社"
              counter="20"
            ></v-text-field>

            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="電話番号"
              placeholder="例：03-xxxx-xxxx"
              counter="20"
            ></v-text-field>

            <v-textarea
              v-model="content"
              :rules="contentRules"
              label="お問合せ内容"
              counter="1000"
            ></v-textarea>

            <v-btn :disabled="!valid" color="success" @click="validate">
              確認
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [v => !!v || '必須項目です。'],
      kana: '',
      kanaRules: [v => !!v || '必須項目です。'],
      email: '',
      emailRules: [
        v => !!v || '必須項目です。',
        v => /.+@.+/.test(v) || '正しいメールアドレスを入力してください。',
      ],
      organization: '',
      phone: '',
      phoneRules: [
        v =>
          v == '' || /(\d-)+/.test(v) || '正しい電話番号を入力してください。',
      ],
      select: null,
      items: ['案件のご相談・ご依頼', 'パートナー募集', 'その他お問合せ'],
      content: '',
      contentRules: [v => !!v || '必須項目です。'],
      dialog: false,
      complete: false,
    };
  },
  computed: {
    contactList() {
      return [
        { label: 'お問合せ種類', value: this.select },
        { label: 'お名前', value: this.name },
        { label: 'ふりがな', value: this.kana },
        { label: 'メールアドレス', value: this.email },
        { label: '所属名・会社名', value: this.organization },
        { label: '電話番号', value: this.phone },
        { label: 'お問合せ内容', value: this.content },
      ];
    },
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async sendContact() {
      this.$refs.form.reset();
      this.complete = true;
      this.dialog = false;
    },
  },
  head() {
    return {
      title: 'お問合せ',
    };
  },
});
</script>
