<template>
  <div class="searchBar">
    <!-- main_img  -->
    <div class="main_img">
      <a href="#" ref="content_img_a">
        <video
          v-if="haveWhatImg == 'obj'"
          loop=""
          muted=""
          autoplay=""
          playsinline=""
          :poster="loopImgs[randNum].poster"
          class="fullscreen-bg__video"
        >
          <source :src="loopImgs[randNum].webm" type="video/webm" />
          <source :src="loopImgs[randNum].mp4" type="video/mp4" />
        </video>
        <img
          v-if="haveWhatImg == 'str'"
          :src="loopImgs[randNum]"
          alt="Poster Covering Steam"
        />
      </a>
    </div>

    <!-- nav bar blue -->
    <div class="container_content">
      <div class="nav_blue" :class="haveChildImgs ? 'have' : ''">
        <ul class="mainUl">
          <li class="mark dropdown">
            <a>Your Store</a>
            <ul class="nestedUl">
              <li><a href="#">Top Sellers</a></li>
              <li><a href="#">New & Trending</a></li>
              <li><a href="#">Current Specials</a></li>
              <li><a href="#">Recently Updated</a></li>
              <li><a href="#">Popular Upcoming</a></li>
            </ul>
          </li>
          <li class="mark dropdown">
            <a>New & Noteworthy</a>
            <ul class="nestedUl">
              <li><a href="#">Top Sellers</a></li>
              <li><a href="#">New & Trending</a></li>
              <li><a href="#">Current Specials</a></li>
              <li><a href="#">Recently Updated</a></li>
              <li><a href="#">Popular Upcoming</a></li>
            </ul>
          </li>
          <li class="mark">
            <a href="#">Categories</a>
          </li>
          <li class="mark">
            <a href="#">Points Shop</a>
          </li>
          <li class="mark">
            <a href="#">News</a>
          </li>
          <li class="mark">
            <a href="#">Labs</a>
          </li>
        </ul>
        <v-form @submit.prevent class="d-flex search_form">
          <input
            class="search-input"
            type="text"
            size="22"
            maxlength="64"
            placeholder="search"
            autocomplete="off"
          />
          <a href="#" class="search-btn">
            <img
              src="https://store.cloudflare.steamstatic.com/public/images/blank.gif"
            />
          </a>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const loopImgs = ref([
  null,
  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans//36333614/f501c177ce4cbb59bebcd32f7dd30f99b5a68fa1.gif",
  null,
  {
    poster:
      "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/444e131369777cd1225fc653/page_bg_english.jpg?t=1652894804",
    webm: "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/444e131369777cd1225fc653/webm_page_bg_english.webm?t=1652894804",
    mp4: "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/444e131369777cd1225fc653/mp4_page_bg_english.mp4?t=1652894804",
  },
]);
const randNum = ref(0);
const haveWhatImg = ref(null);

// check if the (main image) have children or not
const content_img_a = ref(null);
const haveChildImgs = ref(false);
onMounted(() => {
  randNum.value = Math.floor(Math.random() * loopImgs.value.length);
  if (content_img_a.value && content_img_a.value.hasChildNodes()) {
    haveChildImgs.value = true;
  } else {
    haveChildImgs.value = false;
  }

  // check the item
  if (
    loopImgs.value[randNum.value] != null &&
    typeof loopImgs.value[randNum.value] == "object"
  ) {
    haveWhatImg.value = "obj";
    if (content_img_a.value) haveChildImgs.value = true;
  } else if (
    loopImgs.value[randNum.value] != null &&
    typeof loopImgs.value[randNum.value] == "string"
  ) {
    haveWhatImg.value = "str";
    if (content_img_a.value) haveChildImgs.value = true;
  } else {
    haveWhatImg.value = "";
    if (content_img_a.value) haveChildImgs.value = false;
  }
});
</script>

<style scoped lang="scss">
.searchBar {
  position: relative;
  width: 100%;

  .main_img {
    video,
    img {
      max-width: 100%;
      max-height: 400px;
    }
  }

  .nav_blue {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(62, 103, 150, 0.919) 11.38%,
      rgba(58, 120, 177, 0.8) 25.23%,
      rgb(15, 33, 110) 100%
    );
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);

    max-width: 100%;
    min-width: 100%;
    margin: 1rem 0;
    z-index: 350;
    &.have {
      position: absolute;
      margin: 0px auto;
      min-width: 940px;
      max-width: 940px;
      top: 20%;
    }

    ul.mainUl {
      display: flex;
      flex-direction: row;
      li.mark {
        list-style: none;
        position: relative;
        cursor: pointer;
        user-select: none;

        a {
          color: var(--moreLighten-color-white);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 10px 15px;
          line-height: 33px;
          cursor: pointer;
        }
        &:hover {
          background: linear-gradient(
            90deg,
            rgba(33, 162, 255, 0.25) 0%,
            rgba(33, 162, 255, 0.15) 50%,
            rgba(50, 50, 51, 0) 100%
          );
          text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
          ul {
            visibility: visible;
            opacity: 1;
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          background-image: linear-gradient(
            180deg,
            rgb(87, 87, 87),
            rgb(91, 101, 125),
            rgb(87, 87, 87)
          );
          color: var(--lighten-color-white);
          position: absolute;
          left: 0;
          visibility: hidden;
          opacity: 0;
          transition: 0.5s;
          box-shadow: 0 0 10px #000;
          padding: 7px;
          z-index: 400;
          width: max-content;
          li {
            list-style: none;
            cursor: pointer;
            user-select: none;
            a {
              color: var(--lighten-color-white);
              text-decoration: none;
              font-size: 13px;
              font-weight: 300;
              margin: 7px 10px;
              cursor: pointer;
              user-select: none;
              &:hover {
                color: var(--moreLighten-color-white);
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .search_form {
      position: relative;
      background-image: none;
      background-color: #316282;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);
      color: var(--moreLighten-color-white);
      margin-bottom: 0px;
      outline: none;
      height: 27px;
      padding: 0px 6px;

      &:hover {
        background-image: none;
        border: 1px solid #4c9acc;
        box-shadow: 1px 1px 0px rgba(255, 255, 255, 0);
      }
      .search-input {
        color: #0e1c25;
        font-size: 14px;
        margin-top: 1px;
        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1);
        font-family: "Motiva Sans", Sans-serif;
        font-weight: 500;
        outline: none;
        &::placeholder {
          font-size: 14px;
          font-weight: 500;
          color: #0e1c25;
          // font-family: "Times New Roman", Times, serif;
        }
        &:focus {
          color: #fff;
        }
      }
      .search-btn {
        position: absolute;
        background-color: #57a1c5;
        color: #4f5f6e;
        border: 1px solid #9fa1b370;
        border-radius: 2px;
        height: 23px;
        width: 23px;
        right: 2px;
        background-image: url(../assets/images/search_hand.png);
        background-size: cover;
        box-shadow: 1px 1px 4px 0px black;
        &:hover {
          background-color: #45a5d6;
        }
        img {
        }
      }
    }
  }
}

// max screen 940px ---------------------------------------------------
@media (max-width: 940px) {
  body .searchBar .nav_blue {
    margin: 0;
    flex-direction: column;

    &.have {
      position: unset;
      min-width: unset;
    }
    ul.mainUl {
      flex-direction: column;
      width: 100%;
      li.mark {
        a {
          font-size: 16px;
        }
        ul {
          position: unset;
          display: flex;
          max-height: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          transition: max-height 0.5s, 0.35s;
        }
        &:hover {
          ul {
            display: flex;
          }
        }
        &:active {
          ul {
            padding: unset;
            max-height: 250px;
          }
        }
      }
    }

    .search_form {
      max-width: 100%;
      width: 95%;
      margin: 10px;
    }
  }
}
</style>