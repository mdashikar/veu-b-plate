<template>
  <div>
    <Header />
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container columns ">
          <div class="column has-padding-100 has-two-thirds">
            <h2 class="title has-text-dark is-size-1">
              Start, Manage, Deploy.
            </h2>
            <p class="">Lorem ipsum sit dolor amet is a dummy text used by typography industry</p>
            <a class="button bold has-margin-top-20 is-medium is-blue is-outlined is-primary" href="#">Get started</a>
          </div>
          <div class="column">
            <img src="@/assets/png/performance_overview.png" alt="" srcset="">
          </div>
        </div>
      </div>
    </section>
    <section class="section section-feature-grey is-medium is-paddingless  has-margin-bottom-40">
            <div class="container">
                <div class="title-wrapper has-text-centered has-padding-top-15">
                    <h2 class="title is-2">Great Power Comes </h2>
                    <h3 class="subtitle is-5 is-muted">With great Responsability</h3>
                    <div class="divider is-centered"></div>
                </div>
        
                <div class="content-wrapper has-margin-80 ">
                    <div class="columns ">
                        <div class="column  is-one-third">
                            <div class="feature-card is-bordered has-text-centered is-feature-reveal has-padding-40">
                                <div class="card-title">
                                    <h4 class="is-size-4">App builder</h4>
                                </div>
                                <div class="card-icon">
                                    <img src="@/assets/png/mobile_application.png" alt="" srcset="">
                                </div>
                                <div class="card-text">
                                    <p>This is some cool explanatory text that is on two rows</p>
                                </div>
                                <div class="card-action">
                                    <a href="#" class="button btn-align-md primary-btn raised is-primary has-margin-top-10">Free Trial</a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="feature-card is-bordered has-text-centered is-feature-reveal has-padding-40">
                                <div class="card-title">
                                    <h4 class="is-size-4">Cloud integration</h4>
                                </div>
                                <div class="card-icon">
                                    <img src="@/assets/png/maintenance.png">
                                </div>
                                <div class="card-text">
                                    <p>This is some explanatory text that is on two rows</p>
                                </div>
                                <div class="card-action">
                                    <a href="#" class="button btn-align-md primary-btn raised is-primary has-margin-top-10">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="feature-card is-bordered has-text-centered is-feature-reveal has-padding-40">
                                <div class="card-title">
                                    <h4 class="is-size-4">Addons & Plugins</h4>
                                </div>
                                <div class="card-icon">
                                    <img src="@/assets/png/new_entries.png">
                                </div>
                                <div class="card-text">
                                    <p>This is some explanatory text that is on two rows</p>
                                </div>
                                <div class="card-action">
                                    <a href="#" class="button btn-align-md primary-btn raised is-primary has-margin-top-10">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container has-height-100">
          <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Followers</p>
              <p class="title">456K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        </nav>
        </section>
        <section class="section section-light-grey is-medium is-paddingless  has-padding-30">
            <div class="container">
                <div class="title-wrapper has-text-centered">
                    <h2 class="title is-2">Get Started</h2>
                    <h3 class="subtitle is-5 is-muted">Choose one of our plans</h3>
                    <div class="divider is-centered"></div>
                </div>
        
                <div class="pricing-wrap">
                    <div class="feature-card is-pricing has-text-centered has-padding-20">
                        <h3 class="plan-name">Starter</h3>
                        <img src="@/assets/png/working.png" alt="">
                        <div class="price">
                            0
                        </div>
                        <p>Sign up, get some awesome features and get started now</p>
                        <a class="button is-fullwidth is-bold">Get Started</a>
                    </div>
                    <div class="feature-card is-pricing has-text-centered has-padding-20">
                        <h3 class="plan-name">Pro</h3>
                        <img src="@/assets/png/dog.png" alt="">
                        <div class="price">
                            15
                        </div>
                        <p>Sign up, get some awesome features and get started now</p>
                        <a class="button is-fullwidth  primary-btn raised is-bold">Get Started</a>
                    </div>
                    <div class="feature-card is-pricing has-text-centered has-padding-20">
                        <h3 class="plan-name">Business</h3>
                        <img src="@/assets/png/wallet.png" alt="">
                        <div class="price">
                            30
                        </div>
                        <p>Sign up, get some awesome features and get started now</p>
                        <a class="button is-fullwidth is-bold">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    <Footer />
  </div>
  
</template>

<script>
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
export default {
   components: {
    Header,
    Footer
  },
}
</script>


<style lang="stylus" scoped>
.section-feature-grey
  background-color: #fbfbfb

.feature-card.is-bordered 
    border: 1px solid #ededed
.feature-card 
    width: 350px
    height: 380px
    background-color: #fff
    border-radius: 3px
    margin: 0 auto

.card-icon img  
  height: 180px

.divider.is-centered 
    margin: 0 auto


.divider 
    height: 3px
    border-radius: 50px
    background: #41d2b1
    width: 60px

.section.section-light-grey 
    background-color: #EFF4F7

.pricing-wrap 
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    -webkit-box-pack: center
    -ms-flex-pack: center
    justify-content: center
    margin-top: 60px

.feature-card img   
  max-height : 160px
  max-width : 150px

.feature-card.is-pricing 
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    -webkit-box-shadow: -1px 3px 15px 0 rgba(0,0,0,0.06);
    box-shadow: -1px 3px 15px 0 rgba(0,0,0,0.06);
    margin: 8px;
    padding: 20px;
    height: 420px;

.feature-card.is-pricing .plan-name 
    font-family: "Montserrat",sans-serif !important
    font-weight: 600
    font-size: 1.4rem
    color: #444F60

.feature-card.is-pricing .price 
    position: relative
    font-family: "Montserrat",sans-serif !important
    font-weight: 700
    font-size: 2.4rem
    color: #444F60

.feature-card.is-pricing .price:before 
    content: '$'
    position: relative
    top: -12px
    left: 5px
    font-size: 1.2rem
.feature-card.is-pricing .price:after 
    content: 'per month'
    position: absolute
    bottom: -16px
    left: 0
    right: 0
    margin: 0 auto
    font-size: .9rem
    font-weight: 400
    color: #999
.feature-card.is-pricing p 
    padding: 24px 0 16px 0
    color: #999


.button.primary-btn.raised:hover 
    -webkit-box-shadow: 0 14px 26px -12px rgba(79,193,234,0.42),0 4px 23px 0px rgba(0,0,0,0.12),0 8px 10px -5px rgba(79,193,234,0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(79,193,234,0.42),0 4px 23px 0px rgba(0,0,0,0.12),0 8px 10px -5px rgba(79,193,234,0.2) !important;
    opacity: 0.8;


.button.primary-btn:hover 
    color: #fff;

.button.raised:hover 
    -webkit-box-shadow: 0 14px 26px -12px rgba(0,0,0,0.42),0 4px 23px 0px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(0,0,0,0.42),0 4px 23px 0px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2) !important;
    opacity: 0.8;

.button.primary-btn 
    outline: none;
    border-color: #4FC1EA;
    background-color: #4FC1EA;
    color: #fff;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

.button.is-bold 
    font-weight: 500

.button:focus, .button:active 
    outline: none
.button.is-bold 
    font-weight: 500

</style>

