<script setup>
import { ref, computed } from 'vue'
import TheProductCard from '../components/TheProductCard.vue'
import TheSection from '../components/TheSection.vue'
import TheFooter from '../components/TheFooter.vue'
import TheModal from '../components/TheModal.vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/tcc_db'

const productsCollectionRef = collection(db, 'products')
const loading = ref(true)
const productsUnityOne = ref([])
const productsUnityTwo = ref([])

onSnapshot(productsCollectionRef, (querySnapshot) => {
  const fbProducts = []
  querySnapshot.forEach((doc) => {
    fbProducts.push(doc.data())
  })
  productsUnityOne.value = fbProducts.filter(
    (product) => product.market === 'unidade1' && product.date !== 0
  )
  productsUnityTwo.value = fbProducts.filter(
    (product) => product.market === 'unidade2' && product.date !== 0
  )
  loading.value = false
})

const nullProductsOne = computed(() => {
  if (productsUnityOne.value.length === 0) {
    return false
  } else {
    return true
  }
})

const nullProductsTwo = computed(() => {
  if (productsUnityTwo.value.length === 0) {
    return false
  } else {
    return true
  }
})

const modal = ref(false)
const modalValue = ref()

const showModal = (values) => {
  modalValue.value = values
  modal.value = true
}
</script>
<template>
  <main>
    <div v-if="loading" class="flex h-screen items-center justify-center">
      <p class="text-tertinary">Carregando produtos...</p>
    </div>
    <TheSection
      v-if="!loading"
      :start="true"
      title="Produtos disponíveis em loja"
    >
      <p
        class="mt-[3.125rem] mb-[1.25rem] w-full text-center text-[1.563rem] leading-[1.875rem] text-secondary md:text-start"
      >
        Unidade 1: Rua Imberé - N°373
      </p>
      <div
        class="auto-grid mt-[1.563rem] flex w-full flex-col items-center gap-[1.563rem] md:grid md:items-start md:gap-4"
      >
        <p v-if="!nullProductsOne" class="text-secondary">
          Sem produtos disponíveis.
        </p>
        <TheProductCard
          v-for="items in productsUnityOne"
          :key="items.id"
          :title="items.name"
          :img="items.image"
          @click="
            showModal({
              name: items.name,
              price: items.price,
              weight: items.weight,
              amount: items.amount
            })
          "
        />
      </div>
    </TheSection>
    <TheSection v-if="!loading" :start="true">
      <p
        class="mt-[1.563rem] mb-[1.25rem] w-full text-center text-[1.563rem] leading-[1.875rem] text-secondary md:text-start"
      >
        Unidade 2: Av. Taquandava - N°1203
      </p>
      <div
        class="auto-grid mt-[1.563rem] flex w-full flex-col items-center gap-[1.563rem] md:grid md:items-start md:gap-4"
      >
        <p v-if="!nullProductsTwo" class="text-secondary">
          Sem produtos disponíveis.
        </p>
        <TheProductCard
          v-for="items in productsUnityTwo"
          :key="items.id"
          :title="items.name"
          :img="items.image"
          @click="
            showModal({
              name: items.name,
              price: items.price,
              weight: items.weight,
              amount: items.amount
            })
          "
        />
      </div>
    </TheSection>
  </main>
  <TheModal
    v-if="modal"
    :name="modalValue.name"
    :price="modalValue.price"
    :weight="modalValue.weight"
    :amount="modalValue.amount"
    @close-modal="modal = false"
  />
  <TheFooter v-if="!loading" />
</template>
<style scoped>
.auto-grid {
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  grid-auto-rows: max-content;
}
</style>
