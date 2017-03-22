<template>
  <div class="comment">
    <md-button class="md-fab md-warn" style="margin-top:20px;">
      <md-icon>add</md-icon>
    </md-button>
    <md-list class="custom-list md-triple-line" v-for="comment in 4">
            <!-- Course :{{course.name}}  Status :{{course.active}} -->
      <div v-if="comment%2 == 0">
        <router-link tag="li" to="/show_comment">
          <md-layout md-align="center" style="margin-top:10px;">
              <md-layout md-flex="30" md-align="end">
                <md-card md-with-hover class="md-accent" style="width:300px;">
                  <md-card-header>
                    <div class="md-title">Comment owner</div>
                  </md-card-header>
                  <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </md-card-content>
                </md-card>
              </md-layout>
          </md-layout>
        </router-link>
      </div>

      <div v-if="comment%2 != 0">
        <router-link tag="li" to="/show_comment">
          <md-layout md-align="center" style="margin-top:10px;">
            <md-layout md-flex="30">
              <md-card md-with-hover class="md-primary" style="width:300px;">
                <md-card-header>
                  <div class="md-title">Comment owner</div>
                </md-card-header>
                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </md-card-content>
              </md-card>
            </md-layout>
          </md-layout>
        </router-link>
      </div>
    </md-list>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
