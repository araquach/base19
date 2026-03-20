<template>
  <div id="profile" class="section has-text-white">
    <div v-if="loading" class="has-text-centered">
      Loading profile...
    </div>

    <div v-else-if="error" class="has-text-centered">
      {{ error }}
    </div>

    <template v-else-if="profile">
      <div
          v-for="block in profile.blocks"
          :key="block.key"
          :class="['columns', { 'is-reversed-mobile': block.mobileReverse }]"
      >
        <template v-if="block.imageFirst">
          <div class="column">
            <figure :class="['image', block.imageClass]">
              <img :src="block.image" :alt="block.alt || profile.name">
            </figure>
          </div>

          <div :class="['column', textWidthClass(block)]">
            <div v-if="block.key === 'intro'" class="profile-title">
              <h1>{{ profile.title }}<br><span>{{ profile.name }}</span></h1>
            </div>

            <div
                class="profile-markdown"
                :class="block.textClass"
                v-html="block.html"
            ></div>
          </div>
        </template>

        <template v-else>
          <div :class="['column', textWidthClass(block)]">
            <div v-if="block.key === 'intro'" class="profile-title">
              <h1>{{ profile.title }}<br><span>{{ profile.name }}</span></h1>
            </div>

            <div
                class="profile-markdown"
                :class="block.textClass"
                v-html="block.html"
            ></div>
          </div>

          <div class="column">
            <figure :class="['image', block.imageClass]">
              <img :src="block.image" :alt="block.alt || profile.name">
            </figure>
          </div>
        </template>
      </div>

      <div class="profile-footer">
        <hr>

        <p class="title is-4 has-text-white">
          To see more of my work check out my Instagram page
        </p>

        <a
            :href="profile.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
        >
          <p class="is-size-5 has-text-white">
            <span class="icon">
              <i class="fab fa-instagram-square"></i>
            </span>
            {{ profile.instagramHandle }}
          </p>
        </a>

        <br>

        <router-link
            class="button is-primary"
            :to="{ name: 'stylist-prices', params: { stylist: profile.slug } }"
        >
          Get a quote with me!
        </router-link>

        <br><br>

        <router-link
            class="button is-small is-white"
            :to="{ name: 'team', hash: `#${profile.slug}` }"
        >
          Back to the full team
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "ProfilePage",

  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      profile: null,
      loading: true,
      error: null
    }
  },

  created() {
    this.fetchProfile()
  },

  watch: {
    slug() {
      this.fetchProfile()
    }
  },

  methods: {
    async fetchProfile() {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get(`/api/profile/${this.slug}`)
        this.profile = response.data
      } catch (err) {
        console.error("Profile load error:", err)
        this.error = "Profile not found"
      } finally {
        this.loading = false
      }
    },

    textWidthClass(block) {
      return `is-${block.textWidth || 7}`
    }
  }
}
</script>

<style scoped>
.profile-title h1 {
  line-height: 1.05;
}

.profile-title span {
  display: inline-block;
}

.profile-markdown ::v-deep p {
  margin-bottom: 1.5rem;
}

.profile-markdown ::v-deep p:last-child {
  margin-bottom: 0;
}

.profile-markdown ::v-deep strong {
  font-weight: 600;
}

.profile-markdown ::v-deep a {
  color: inherit;
  text-decoration: underline;
}

.image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>