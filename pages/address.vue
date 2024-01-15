<script setup>
import MainLayout from '~/layouts/MainLayout'
</script>

<template>
  <MainLayout>
    <div id="AddressPage"
         class="mt-4 max-w-[500px] mx-auto px-2">
      <div class="mx-auto bg-white rounded-lg p-3 border">
        <div class="text-xl text-bold mb-2">
          Address Details
        </div>
        <form @submit.prevent="submit()">
          <TextInput class="w-full"
                     placeholder="Contact Name"
                     v-model:input="contactName"
                     inputType="text"
                     :error="error && error.type === 'contactName' ? error.message : ''"/>
        </form>
      </div>
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped>
</style>
