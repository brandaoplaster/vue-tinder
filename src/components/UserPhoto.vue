<template>
  <div>
    <swiper :options="swiperOptions">
      <swiperSlide v-for="photo in photos" :key="photo.id">
        <i v-if="photo.default" class="fas fa-check-square has-text-white default-check"></i>
        <img :src="photo.url" @click="openMenu(photo)" />
      </swiperSlide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <b-field class="file is-centered">
      <b-upload v-model="photoToUpload">
        <a class="button is-primary">
          <b-icon icon="camera" pack="fas" size="is-small"></b-icon>
          <span>Adicionar nova foto</span>
        </a>
      </b-upload>
    </b-field>

    <b-modal :active="isMenuActive" :width="640" class="photo-menu" scroll="keep" @click="closeMenu()">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <a @click="setAsDefault()">Marca como default</a>
            <hr />
            <a @click="remove()">Remover</a>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
  i.default-check {
    position: absolute;
    font-size: 1.4em;
    margin-top: 2%;
    margin-left: 2%;
  }
</style>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import PhotoService from '../services/photo_service';

  export default {
    data: () => ({
      photos: [],
      currentPhoto: {},
      isMenuActive: false,
      photoToUpload: null,
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }),

    components: {
      swiper,
      swiperSlide
    },

    mounted() {
      PhotoService.load().then(photos => {
        this.photos = photos
      });
    },

    watch: {
      photoToUpload(newValue) {
        if(newValue) {
          PhotoService.add(newValue).then(photo => {
            this.photos.add(photo);
          });
        }
      }
    },

    methods: {
      openMenu(photo) {
        this.isMenuActive = true;
        this.currentPhoto = photo;
      },

      closeMenu() {
        this.isMenuActive = false;
      },

      setAsDefault() {
        PhotoService.setAsDefault(this.currentPhoto).then(() => {
          let defaultPhoto = this.photos.find(photo => { return photo.default });
          if(defaultPhoto) defaultPhoto.default = false;
          this.currentPhoto.default = true;
          this.closeMenu();
        });
      },

      remove() {
        PhotoService.remove(this.currentPhoto).then(() => {
          let indexToRemove = this.photos.indexOf(this.currentPhoto);
          this.photos.slice(indexToRemove);
          this.closeMenu();
        });
      }
    }
  }
</script>
