<template>
  <div class="component-modals">
    <b-modal id="modal-sign_up" title="新規ユーザー登録" size="lg" centered>
      <b-form-input type="text" name="name" placeholder="表示名(ニックネーム)" />
      <b-form-input type="email" name="mail" placeholder="メールアドレス" />
      <b-form-input type="password" name="password" placeholder="パスワード(8文字以上24文字以内)" />
      <b-form-input type="password" name="password_confirmation" placeholder="パスワード(確認)" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-sign_up')">キャンセル</b-button>
        <b-button variant="primary">登録</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-sign_in" title="サインイン" size="lg" centered>
      <b-form-input type="email" name="mail" placeholder="メールアドレス" />
      <b-form-input type="password" name="password" placeholder="パスワード" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-sign_in')">キャンセル</b-button>
        <b-button variant="primary">サインイン</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-sign_out" title="サインアウト" size="lg" centered>
      <p>本当にサインアウトしますか？</p>
      <template v-slot:modal-footer>
        <b-form-button variant="secondary" @click="$bvModal.hide('modal-sign_out')">キャンセル</b-form-button>
        <b-form-button variant="primary">サインアウト</b-form-button>
      </template>
    </b-modal>
    <b-modal id="modal-create_group" title="新規グループ作成" size="lg" centered>
      <b-form-input type="text" name="name" placeholder="グループ名" />
      <b-form-input type="text" name="description" placeholder="グループの概要" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-create_group')">キャンセル</b-button>
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-set_groups" title="所属グループの設定" size="lg" centered>
      <b-form-input type="text" name="group_names" placeholder="グループ名(スペースで区切る)" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-set_groups')">キャンセル</b-button>
        <b-button variant="primary">保存</b-button>
      </template>
    </b-modal>//TODO:LINEの通知設定modalの追加
    <b-modal id="modal-create_project" title="新規プロジェクト作成" size="lg" centered>
      <b-form-input type="text" name="project_name" placeholder="プロジェクト名" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-create_project')">キャンセル</b-button>
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-set_project_visibility" title="プロジェクトの公開設定" size="lg" centered>
      <b-form-radio name="project_visibility" value="public">公開</b-form-radio>
      <b-form-radio name="project_visibility" value="private">非公開</b-form-radio>
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-set_project_visibility')">キャンセル</b-button>
        <b-button variant="primary">保存</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-remove_project" title="プロジェクトを削除" size="lg" centered>
      <p>本当にプロジェクトを削除しますか？削除すると復元することはできません。</p>
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-remove_project')">キャンセル</b-button>
        <b-button variant="primary">削除</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-create_phase" title="新規フェーズ作成" size="lg" centered>
      <b-form-input type="text" name="phase_name" placeholder="フェーズ名" />
      <b-form-datepicker />
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-create_phase')">キャンセル</b-button>
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-create_task" title="新規タスク作成" size="lg" centered>
      <b-form-input type="text" name="task_name" placeholder="タスク名" />
      <b-form-input type="text" name="task_memo" placeholder="メモ" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-create_task')">キャンセル</b-button>
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-edit_task_progress" title="タスクの進捗度編集: TASK_NAME" size="lg" centered>
      <b-form-input type="range" name="progress" min="0" max="100" />//TODO:この下に%表示の追加
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('modal-edit_task_progress')">キャンセル</b-button>
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
  </div>
</template>