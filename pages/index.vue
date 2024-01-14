<script setup>
import MainLayout from "~/layouts/MainLayout.vue"

const products = [
  {
    id: 1,
    title: 'Title 1',
    description: 'This is a description',
    url: "https://picsum.photos/id/7/800/800",
    price: 9999
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'This is a description',
    url: "https://picsum.photos/id/71/800/800",
    price: 9999
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'This is a description',
    url: "https://picsum.photos/id/72/800/800",
    price: 9999
  },
  {
    id: 11,
    title: 'Title 11',
    description: 'This is a description',
    url: "https://picsum.photos/id/7/800/800",
    price: 9999
  },
  {
    id: 12,
    title: 'Title 12',
    description: 'This is a description',
    url: "https://picsum.photos/id/71/800/800",
    price: 9999
  },
  {
    id: 13,
    title: 'Title 3',
    description: 'This is a description',
    url: "https://picsum.photos/id/72/800/800",
    price: 9999
  },
  {
    id: 21,
    title: 'Title 21',
    description: 'This is a description',
    url: "https://picsum.photos/id/7/800/800",
    price: 9999
  },
  {
    id: 22,
    title: 'Title 22',
    description: 'This is a description',
    url: "https://picsum.photos/id/71/800/800",
    price: 9999
  },
  {
    id: 23,
    title: 'Title 23',
    description: 'This is a description',
    url: "https://picsum.photos/id/72/800/800",
    price: 9999
  }
]
</script>

<template>
  <MainLayout>
    <div id="IndexPage" 
         class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-for="product in products" 
             :key="product">
          <ProductComponent :product="product"/>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped>
</style>