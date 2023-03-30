
<template>
  <div class="home">
    <!-- Search Bar Component -->
    <searchBar></searchBar>
    <div class="container_content">
      <div class="featured-recommended">
        <span>FEATURED & RECOMMENDED</span>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item">
              <div class="imgs d-flex active">
                <div class="side">
                  <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1604030/capsule_616x353.jpg?t=1653053023"
                    alt=""
                    class="w-100"
                  />
                </div>
                <div class="info">
                  <h2 class="text-light ps-3" style="margin-bottom: 0">
                    V Rising
                  </h2>
                  <br />
                  <div class="row">
                    <a href="" class="col-5 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1604030/ss_7a8b278828615b9d9ac03e159ccf919889ea2504.116x65.jpg?t=1652961693"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                    <a href="" class="col-6 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1604030/ss_2a3cf66ed5afe6b3c6edb4e4944af7a14b16e229.116x65.jpg?t=1652961693"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                    <a href="" class="col-5 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1604030/ss_3eff976163ecc8d479a9a33008620f911020a2f8.116x65.jpg?t=1652961693"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                    <a href="" class="col-6 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1604030/ss_5c9b4078cea442e9d8961767688ddc195c204ecd.600x338.jpg?t=1652961693"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                  </div>
                  <p
                    class="text-light ps-3"
                    style="font-size: 16px; margin-bottom: -0.5rem"
                  >
                    Now Available
                  </p>
                  <p class="text-light p-1 m-2 ms-3">Top Seller</p>
                  <div
                    class="sallary d-flex px-3"
                    style="justify-content: space-between; height: 28px"
                  >
                    <p style="color: #06bfff; font-size: 12px">$19.99 USD</p>
                    <ion-icon
                      style="font-size: 18px; color: #f8f9fa"
                      name="logo-windows"
                    ></ion-icon>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="imgs d-flex active">
                <div class="side">
                  <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1874880/header.jpg?t=1652819381"
                    alt=""
                    class="w-100"
                  />
                </div>
                <div class="info">
                  <h2 class="text-light ps-3" style="margin-bottom: 0">
                    Arma Reforger
                  </h2>
                  <br />
                  <div class="row">
                    <a href="" class="col-5 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1874880/ss_8ff0eb480bf44c42dbaf1b8f15eb4d8f3610d72c.600x338.jpg?t=1652819381"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                    <a href="" class="col-6 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1874880/ss_ae0cc8e5d644b62a6c229564a44acd83b80c23df.116x65.jpg?t=1652819381"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                    <a href="" class="col-5 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1874880/ss_48276f1b8a7c920b33e96db838d4952115a18c05.116x65.jpg?t=1652819381"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                    <a href="" class="col-6 sm-images">
                      <img
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1874880/ss_66b38fe856a5e79ed50beb5ce4f3e5910992f9ea.116x65.jpg?t=1652819381"
                        alt=""
                        class="w-100 small-img"
                      />
                    </a>
                  </div>
                  <p
                    class="text-light ps-3"
                    style="font-size: 16px; margin-bottom: -0.5rem"
                  >
                    Now Available
                  </p>
                  <p class="text-light p-1 m-2 ms-3">Top Seller</p>
                  <div
                    class="sallary d-flex px-3"
                    style="justify-content: space-between; height: 28px"
                  >
                    <p style="color: #06bfff; font-size: 12px">$29.99 USD</p>
                    <ion-icon
                      style="font-size: 18px; color: #f8f9fa"
                      name="logo-windows"
                    ></ion-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-control prev" type="button">
            <div class="arrow left"></div>
          </button>
          <button class="carousel-control next" type="button">
            <div class="arrow right"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, defineComponent } from "vue";
// define Search Bar Component
import SearchBar from "../components/SearchBar.vue";
const searchBar = defineComponent(SearchBar);
</script>


<style scoped lang="scss">
.featured-recommended {
  margin: 20px auto;
  max-width: 64rem;
  margin: 0em auto 4rem auto;
  padding: 0.8rem;

  span {
    color: #d5d6d6;
    font-size: 1rem;
    font-weight: 400;
  }

  #carouselExampleIndicators {
    margin: 5px auto;
  }

  .carousel-inner {
    box-shadow: 0 0 20px 1px black;

    .carousel-item {
      .featured-main-img {
        width: 70%;

        .carso-info {
          width: 30%;
        }
      }

      .imgs {
        .row {
          .sm-images {
            height: 100px;
            img {
              height: 92%;
              opacity: 0.6;
              &:hover {
                opacity: 1;
              }
            }
          }
        }
      }

      .side {
        z-index: 1;
        box-shadow: 0 0 13px 10px black;
        width: 109%;
        cursor: pointer;

        img {
          height: 100%;
        }
      }

      .info {
        border: 0.7px solid #7271717d;
        background-image: url(./images/slideBg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;

        h2 {
          font-size: 1.4em;
          font-weight: 300;
        }
        p:nth-of-type(2) {
          font-size: 0.9em;
          background-color: #838383;
          border-radius: 2px;
          width: 20%;
        }
      }
    }
  }

  .carousel-control {
    height: 100px;
    width: max-content;
    padding: 10px;
    &.next {
      background-image: linear-gradient(90deg, transparent, black);
      right: -63px;
      top: 114px;
      .right {
        background: url(../../src/assets/images/arrowsLeftRight.png);
        width: 23px;
        height: 36px;
      }
      &:hover {
        background-image: linear-gradient(
          90deg,
          transparent,
          rgba(169, 169, 169, 0.794)
        );
      }
    }
    &.prev {
      background-image: linear-gradient(90deg, black, transparent);
      left: -62px;
      top: 135px;
      .left {
        background: url(../../src/assets/images/arrowsLeftRight.png);
        width: 23px;
        height: 36px;
        background-position-x: 23px;
      }
      &:hover {
        background-image: linear-gradient(
          90deg,
          rgba(169, 169, 169, 0.794),
          transparent
        );
      }
    }
  }
}

// for all of carousels in the page

.carousel-indicators {
  bottom: -31px;
}
.carousel-indicators [data-bs-target] {
  width: 15px;
  height: 9px;
  border-radius: 3px;
  border: none;
}
</style>