<template>
  <b-navbar class="is-fixed-top is-spaced">
    <template slot="start">
      <b-navbar-item v-scroll-to="'#home'" :to="{ name: 'main', hash: '#home' }" tag="router-link">
        Home
      </b-navbar-item>
      <a href=""></a>
      <b-navbar-item v-scroll-to="'#about'" :to="{ name: 'main', hash: '#about' }" tag="router-link">
        About
      </b-navbar-item>
      <b-navbar-item v-scroll-to="'#team'" :to="{ name: 'main', hash: '#team' }" tag="router-link">
        Team
      </b-navbar-item>
      <b-navbar-item v-scroll-to="'#blog'" :to="{ name: 'main', hash: '#blog' }" tag="router-link">
        Blog
      </b-navbar-item>
      <b-navbar-item v-scroll-to="'#offers'" tag="router-link" to="/#offers">
        Offers
      </b-navbar-item>
      <b-navbar-dropdown label="More">
        <b-navbar-item v-scroll-to="'#price'" :to="{ name: 'main', hash: '#price' }" tag="router-link">
          Prices
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#joinus'" :to="{ name: 'main', hash: '#joinus' }" tag="router-link">
          Join Us
        </b-navbar-item>
        <hr class="navbar-divider">
        <b-navbar-item v-scroll-to="'#models'" :to="{ name: 'main', hash: '#models' }" tag="router-link">
          Models
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" href="https://phorest.com/book/salons/basehairacademy">
            <strong>Book Now</strong>
          </a>
          <b-navbar-item v-scroll-to="'#contact'" :to="{ name: 'contact', hash: '#contact' }" class="button is-light"
                         tag="router-link">
            Contact Us
          </b-navbar-item>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>