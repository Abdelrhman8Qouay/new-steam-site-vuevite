
<template>
  <v-app id="inspire">
    <!-- header_Capital -->
    <div class="header_Capital">
      <div class="container_content">
        <!-- Top Row Of Header -->
        <v-row class="serv-own" justify="end">
          <div class="install-btn">
            <a href="#"
              ><v-icon id="download">fas fa-download</v-icon> Install Stream</a
            >
          </div>
          <div class="login">
            <a href="#">login</a>
          </div>
          |
          <div class="dropdown_lang">
            <a
              class="btn btn-secondary dropdown-toggle"
              @click="dropdownLang = !dropdownLang"
              >language</a
            >

            <ul
              class="dropdown-menu"
              :class="dropdownLang == true ? 'active' : ''"
            >
              <li v-for="(lang, i) in listLangs" :key="i">
                <a class="dropdown-item" :href="'#value=' + lang.val">{{
                  lang.name
                }}</a>
              </li>
            </ul>
          </div>
        </v-row>
        <!-- Down Row Of Header -->
        <v-row class="down">
          <button class="navbar-toggler" id="toggle">
            <div
              class="img-toggle"
              @click="dialogSmMainMenuHeader = !dialogSmMainMenuHeader"
            >
              <img src="./assets/images/download.png" alt="dropdown main bar" />
            </div>
          </button>
          <div class="logo-header">
            <img
              src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
              alt=""
            />
          </div>
          <nav class="nav-up">
            <li id="store-up">
              <a href="#">STORE</a>
              <ul class="nup-ul" id="store-ul">
                <li><a href="">HOME</a></li>
                <li><a href="">DISCOVERY QUEUE</a></li>
                <li><a href="">WISHLIST</a></li>
                <li><a href="">POINTS SHOP</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">STATS</a></li>
              </ul>
            </li>
            <li id="community-up">
              <a href="#">COMMUNITY</a>
              <ul class="nup-ul" id="community-ul">
                <li><a href="#">HOME</a></li>
                <li><a href="">DISCUSSIONS</a></li>
                <li><a href="">WORKSHOP</a></li>
                <li><a href="">MARKET</a></li>
                <li><a href="">BROADCASTS</a></li>
              </ul>
            </li>
            <a href="#">ABOUT</a>
            <a href="#">SUPPORT</a>
          </nav>
        </v-row>
      </div>
    </div>

    <!-- content_header-sm -->
    <div
      class="content_header_sm"
      :class="dialogSmMainMenuHeader ? 'active' : ''"
      @click.self="dialogSmMainMenuHeader = !dialogSmMainMenuHeader"
    >
      <div
        class="header_small d-flex flex-column justify-space-between"
        :class="dialogSmMainMenuHeader ? 'active' : ''"
      >
        <ul class="gozl_ul">
          <li class="mark"><a href="#">Login</a></li>
          <li class="mark dropdown">
            <a>Store</a>
          </li>
          <li class="mark drop-content">
            <ul class="nup-ul" id="store-ul">
              <li><a href="#">HOME</a></li>
              <li><a href="#">DISCOVERY QUEUE</a></li>
              <li><a href="#">WISHLIST</a></li>
              <li><a href="#">POINTS SHOP</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">STATS</a></li>
            </ul>
          </li>
          <li class="mark dropdown">
            <a>Community</a>
          </li>
          <li class="mark drop-content">
            <ul class="nup-ul" id="community-ul">
              <li><a href="#">HOME</a></li>
              <li><a href="#">DISCUSSIONS</a></li>
              <li><a href="#">WORKSHOP</a></li>
              <li><a href="#">MARKET</a></li>
              <li><a href="#">BROADCASTS</a></li>
            </ul>
          </li>
          <li class="mark"><a href="#">Support</a></li>
          <li @click="dialogSmChangeLang = !dialogSmChangeLang">
            <a>change language</a>
            <v-dialog
              v-model="dialogSmChangeLang"
              width="auto"
              class="changeLangSm_overlay"
            >
              <v-card class="changeLangSm_card mx-auto" rounded="0">
                <div class="line"></div>
                <v-card-actions class="xmark">
                  <v-btn
                    icon="fas fa-xmark"
                    @click="dialogSmChangeLang = !dialogSmChangeLang"
                  ></v-btn>
                </v-card-actions>
                <v-card-title>
                  <span class="text-h5">CHANGE LANGUAGE</span>
                </v-card-title>
                <v-card-text class="contentCard">
                  <v-row>
                    <select name="change-lang" id="changLangSm">
                      <option
                        v-for="(lang, i) in listLangs"
                        :key="i"
                        :value="lang.val"
                      >
                        {{ lang.name }}
                      </option>
                    </select>
                  </v-row>
                </v-card-text>

                <v-card-actions class="justify-content-end">
                  <v-btn
                    class="btnChange"
                    @click="dialogSmChangeLang = !dialogSmChangeLang"
                    >Change language</v-btn
                  >
                  <v-btn @click="dialogSmChangeLang = !dialogSmChangeLang"
                    >close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </li>
          <li><a href="#">View desktop website</a></li>
        </ul>
        <div class="homi_header_sm">
          <div class="logo_footer w-100 d-block">
            <img
              src="./assets/images/logo_valve_footer.png"
              alt="logo_volvo_img"
            />
          </div>
          <div class="main-text" href="#rightsReserved">
            © Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            <span class="mainmenu_valve_links">
              <a
                href="https://store.steampowered.com/privacy_agreement/?snr=1_4_4__global-responsive-menu"
                target="_blank"
                >Privacy Policy</a
              >
              &nbsp;| &nbsp;<a
                href="http://www.valvesoftware.com/legal.htm"
                target="_blank"
                >Legal</a
              >
              &nbsp;| &nbsp;<a
                href="https://store.steampowered.com/subscriber_agreement/?snr=1_4_4__global-responsive-menu"
                target="_blank"
                >Steam Subscriber Agreement</a
              >
              &nbsp;| &nbsp;<a
                href="https://store.steampowered.com/steam_refunds/?snr=1_4_4__global-responsive-menu"
                target="_blank"
                >Refunds</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <v-main class="main_content">
      <RouterView />
    </v-main>

    <div class="footer_main mb-7">
      <div class="container_content py-3">
        <v-divider></v-divider>
        <v-row class="footer_content">
          <v-col cols="2"
            ><a href="#"
              ><img
                src="./assets/images/footerLogo_valve_new.png"
                alt="new valve footerLogo" /></a
          ></v-col>
          <v-col>
            <div class="main-text" href="#rightsReserved">
              © 2023 Valve Corporation. All rights reserved. All trademarks are
              property of their respective owners in the US and other countries.
              VAT included in all prices where applicable.
              <span class="mainmenu_valve_links">
                <a
                  href="https://store.steampowered.com/privacy_agreement/?snr=1_4_4__global-responsive-menu"
                  target="_blank"
                  >Privacy Policy</a
                >
                &nbsp;| &nbsp;<a
                  href="http://www.valvesoftware.com/legal.htm"
                  target="_blank"
                  >Legal</a
                >
                &nbsp;| &nbsp;<a
                  href="https://store.steampowered.com/subscriber_agreement/?snr=1_4_4__global-responsive-menu"
                  target="_blank"
                  >Steam Subscriber Agreement</a
                >
                &nbsp;| &nbsp;<a
                  href="https://store.steampowered.com/steam_refunds/?snr=1_4_4__global-responsive-menu"
                  target="_blank"
                  >Refunds</a
                >
              </span>
            </div>
          </v-col>
          <v-col cols="2"
            ><a href="#"
              ><img
                src="./assets/images/logo_steam_footer2.png"
                alt="steam footerLogo" /></a
          ></v-col>
        </v-row>
        <v-divider></v-divider>
        <div class="valve_links" data-panel='{"flow-children":"row"}'>
          <a href="http://www.valvesoftware.com/about" target="_blank" rel=""
            >About Valve</a
          >
          &nbsp; | &nbsp;<a
            href="http://www.valvesoftware.com"
            target="_blank"
            rel=""
            >Jobs</a
          >
          &nbsp; | &nbsp;<a
            href="http://www.steampowered.com/steamworks/"
            target="_blank"
            rel=""
            >Steamworks</a
          >
          &nbsp; | &nbsp;<a
            href="https://partner.steamgames.com/steamdirect"
            target="_blank"
            rel=""
            >Steam Distribution</a
          >
          &nbsp; | &nbsp;<a
            href="https://help.steampowered.com/en/?snr=1_44_44_"
            >Support</a
          >
          &nbsp; | &nbsp;<a
            href="https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_"
            target="_blank"
            rel=""
            >Gift Cards</a
          >
          &nbsp; | &nbsp;<a
            href="https://steamcommunity.com/linkfilter/?url=http://www.facebook.com/Steam"
            target="_blank"
            rel=" noopener"
            ><img
              src="https://store.cloudflare.steamstatic.com/public/images/ico/ico_facebook.gif"
            />
            Steam</a
          >
          &nbsp; | &nbsp;<a
            href="http://twitter.com/steam"
            target="_blank"
            rel=""
            ><img
              src="https://store.cloudflare.steamstatic.com/public/images/ico/ico_twitter.gif"
            />
            @steam</a
          >
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";

const dropdownLang = ref(false);
const dialogSmChangeLang = ref(false);
const dialogSmMainMenuHeader = ref(false);

const listLangs = [
  { name: "العربية", val: "ar" },
  { name: "English", val: "en" },
  { name: "Spanish", val: "sp" },
];

onMounted(() => {
  let recaptchaScript = document.createElement("script");
  recaptchaScript.setAttribute("src", "../src/jsWork/app.js");
  document.head.appendChild(recaptchaScript);
});

// To Add Icons On All Pages >>>>>
// this is must have
// Get Icons To Put It On { library } to get from it the icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane,
  faProjectDiagram,
  faDownload,
  faXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add([faPaperPlane, faProjectDiagram, faDownload, faXmark, faSearch]);
library.add([faFacebook, faGithub]);
</script>

<style lang="scss" scoped>
// header Content ---------------------------------------------------
.header_Capital {
  height: auto;
  background-color: var(--main-bar-color);
  padding: 1rem;
  .serv-own {
    height: 38px;
    font-size: 12px;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gpSystemLighterGrey);
    gap: 10px;
    user-select: none;

    a {
      text-decoration: none;
    }
    .install-btn {
      background-color: #5c7e10;
      padding: 4px 8px;
      font-size: 12px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: var(--lighten-color-white);
        #download {
          font-size: 13px;
          color: var(--lighten-color-white);
          margin: 0 4px;
        }
      }

      &:hover a {
        color: var(--moreLighten-color-white);
      }
    }

    .login a {
      color: var(--gpSystemLighterGrey);
      &:hover {
        color: var(--moreLighten-color-white);
      }
    }

    .dropdown_lang {
      color: var(--gpSystemLighterGrey);
      position: relative;
      &:hover {
        color: var(--moreLighten-color-white);
      }
      .dropdown-menu {
        background-color: var(--main-bar-color);
        box-shadow: 0 0 10px #000;
        min-width: 100px;
        max-height: 500px;
        overflow-y: auto;
        padding: 8px;
        position: absolute;
        left: 0;
        bottom: -80px;
        display: none;
        z-index: 1000;
        &.active {
          display: block;
        }

        li {
          list-style: none;
          a {
            color: var(--gpSystemLighterGrey);
            text-decoration: none;
            &:hover {
              color: var(--moreLighten-color-white);
            }
          }
        }
      }
    }
  }

  .down {
    user-select: none;
    .logo-header img {
      width: 11rem;
    }

    .nav-up {
      display: flex;
      align-items: center;
      margin: 0 0 2rem;

      li {
        list-style: none;
        a {
          text-decoration: none;
          color: var(--gpSystemLighterGrey);
          font-size: 13px;
          &:hover {
            color: var(--moreLighten-color-white);
          }
        }
      }
      a {
        text-decoration: none;
        color: var(--gpSystemLighterGrey);
        font-size: 13px;
        &:hover {
          color: var(--moreLighten-color-white);
        }
        margin: auto 0.9rem;
      }

      .nup-ul {
        display: none;
      }

      #store-up:hover #store-ul {
        display: block;
        position: absolute;
        background-color: var(--main-bar-color);
        padding: 10px 0;
        z-index: 1000;
      }

      #community-up:hover #community-ul {
        display: block;
        position: absolute;
        background-color: var(--main-bar-color);
        padding: 10px 0;
        z-index: 600;
      }
    }

    #toggle {
      display: none;
      .img-toggle {
        width: 2.4rem;
        margin: auto 20px;
        img {
          width: 100%;
        }
      }
    }
  }
}
// Header Small Screen ---------------------------------------------------
.content_header_sm {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: var(--gpBackground-DarkSofter);
  visibility: hidden;
  transition: 0.4s;
  z-index: 600;
  &.active {
    visibility: visible;
  }
}
.header_small {
  background-color: var(--main-bar-color);
  box-shadow: 0 0 7px #000;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  height: 100vh;
  max-width: 290px;
  left: -290px;
  transition: 0.5s;
  user-select: none;
  overflow-y: auto;
  &.active {
    left: 0;
  }

  ul {
    width: 100%;
    height: max-content;
    li.mark {
      font-size: 1.5rem;
      padding: 0.5rem 15px;
      border-top: 1px solid #2f3138;
      border-bottom: 1px solid #000000;
      a {
        text-decoration: none;
        color: var(--lighten-color-white);
      }
    }
    li {
      font-size: 1rem;
      font-weight: 200;
      list-style: none;
      padding: 0.25rem 15px;
      &.drop-content {
        background-color: var(--main-bar-color);
        max-height: 0;
        overflow: hidden;
        padding: 0;
        margin: 0;
        border-top: none;
        border-bottom: none;
        transition: max-height 0.5s, background-color 0.25s, color 0.25s;
        ul {
          li {
            border-top: none;
            border-bottom: none;
            a {
              text-decoration: none;
              color: var(--lighten-color-white);
            }
          }
        }
        &.active {
          display: block;
          ul {
            transform: scaleY(1);
          }
        }
      }
      a {
        text-decoration: none;
        color: var(--gpSystemGrey);
        width: 100%;
      }
      &.dropdown {
        position: relative;
        &::before {
          content: "";
          background-image: url(./assets/images/drobdown.png);
          background-size: 100% 100%;
          width: 20px;
          height: 12px;
          position: absolute;
          right: 12px;
          top: calc(50% - 6px);
          transition: transform 0.25s;
        }
        &.active {
          background-color: var(--gpStoreDarkerGrey);
          &::before {
            transform: rotateZ(180deg);
          }
        }
      }
      &.dropdown.active + .drop-content {
        background-color: var(--gpStoreDarkerGrey);
        max-height: 350px;
        padding: unset;
        margin: unset;
        border-top: 1px solid #2f3138;
        border-bottom: 1px solid #000000;
      }
    }
  }

  .homi_header_sm {
    padding: 0.5rem 15px 1.5rem 15px;
    width: 100%;
    .logo_footer {
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
    .main-text {
      font-size: 11px;
      font-weight: 200;
      white-space: normal;
      color: #8a8a8a;
      a {
        color: #8a8a8a;
        text-decoration: none;
      }
    }
  }
}
.header_small.active ~ .main_content::before {
  position: absolute;
  z-index: 800;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--gpBackground-LightSoft);
}
//overlay of change language with small screen
.changeLangSm_overlay {
  .changeLangSm_card {
    background: radial-gradient(
        circle at top left,
        rgba(74, 81, 92, 0.4) 0%,
        rgba(75, 81, 92, 0) 60%
      ),
      #25282e;
    max-width: 350px;
    min-width: 100px;
    overflow: auto;

    .xmark {
      height: 25px;
      color: var(--gpSystemGrey);
    }
    .v-card-actions {
      justify-content: end;
      color: var(--lighten-color-white);
    }
    .line {
      width: 100%;
      height: 1px;
      background: linear-gradient(to right, #00ccff, #3366ff);
    }
    .v-card-title {
      color: var(--lighten-color-white);
    }
    .contentCard {
      select {
        width: 400px;
        padding: 3px;
        background-color: #fff;
        border-radius: 3px;
      }
    }

    .btnChange {
      background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
      color: #d2efa9;
    }
  }
}

// Footer Side ---------------------------------------------------
.footer_main {
  background-color: var(--main-bar-color);
  color: var(--gpSystemLighterGrey);
  padding: 0 10px;

  .footer_content {
    padding: 10px;
    .v-col {
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      .main-text {
        font-size: 13px;
        font-weight: 200;
        white-space: normal;
        color: #8a8a8a;
        a {
          text-decoration: none;
          color: var(--lighten-color-white);
        }
      }
    }
  }
  .valve_links {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 200;
    color: #8a8a8a;
    a {
      text-decoration: none;
      color: var(--lighten-color-white);
      img {
        position: relative;
        bottom: -3px;
      }
    }
  }
}

// max screen 940px ---------------------------------------------------
@media (max-width: 940px) {
  body .header_Capital {
    .serv-own {
      display: none;
    }
    .down {
      margin: 0;
      #toggle {
        display: inline-block;
      }
      .nav-up {
        display: none;
      }

      .logo-header {
        margin: 0 auto;
        img {
          width: 10rem;
        }
      }
    }
  }

  .footer_main {
    display: none;
  }
}
</style>
