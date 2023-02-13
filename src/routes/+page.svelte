<script>
    import {currentPage, menuVisible, screenNav} from './currentPage.js'
    import {onMount} from 'svelte'

    onMount(() => {
        if (screen.width > $screenNav) {
            menuVisible.set(true)
        }
        currentPage.set(window.location.href.split('//')[1].split('/')[1])
    })
</script>

<svelte:head>
    <title>Space Tourism</title>
</svelte:head>

<div id="app">
    <div class="home">
        <div class="home__info">
            <div class="home__info__title">
                <p class="home__info__title__p">so, you want to travel to</p>
                <h1 class="home__info__title__h1">space</h1>
            </div>
            <div class="home__info__description">
                <p class="home__info__description__p">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
        </div>
        <div class="home__explore">
            <a class="home__explore__button" href="/destination">explore</a>
        </div>
    </div>
</div>

<style lang="scss">
    #app{
        background-image: url(../lib/home/background-home-mobile.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 100vw;
        width: 100vw;
        min-height: 100vh;
    }

    .home{
        padding-top: 112px;
        padding-inline: 24px;
        text-align: center;

        &__info{
            &__title{
                text-transform: uppercase;
                &__p{
                    letter-spacing: $spacing;
                    color: $pastel-blue;
                }

                &__h1{
                    font-size: 8rem;
                    font-family: 'Bellefair';
                    font-weight: 400;
                    margin-block: 16px;
                }
            }

            &__description{
                &__p{
                    font-family: 'Barlow';
                    color: $pastel-blue;
                    line-height: 25px;
                    font-size: 1.5rem;
                }
            }
        }

        &__explore{
            display: grid;
            place-items: center;
            padding: 80px;

            &__button{
                display: block;
                aspect-ratio: 1/1;
                width: 150px;
                background-color: $white;
                color: $space-blue;
                border-radius: 50%;
                display: grid;
                place-items: center;
                outline: 0px solid transparent;
                transition: outline .4s;
                text-decoration: none;
                font-size: 2rem;
                font-family: 'Bellefair';
                text-transform: uppercase;

                &:hover{
                    outline: 48px solid $white-alpha;
                }
            }
        }

        
    }

    @media (min-width: 597px) {
        #app{
            background-image: url(../lib/home/background-home-tablet.jpg) !important;
        }

        .home{
            padding-top: 200px;
            padding-inline: 160px;

            &__info{
                &__title{
                    &__p{
                        font-size: 2rem;
                    }

                    &__h1{
                        font-size: 15rem;
                    }
                }
            }

            &__explore{
                &__button{
                    width: 242px;
                    font-size: 3.2rem;
                }
            }
        }
    }

    @media (min-width: 1024px) {
        #app{
            background-image: url(../lib/home/background-home-desktop.jpg) !important;
        }

        .home{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 100%;
            text-align: start;
            padding-top: 0px;
            height: 100vh;
            padding-inline: 40vh;

            &__info{
                // padding-top: 387px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: 450px;
                height: 100%;
                margin-bottom: 96px;
                padding-bottom: 100px;

                &__title{
                    &__p{
                        font-size: 2.8rem;
                    }
                }

                &__description{
                    &__p{
                        font-size: 1.8rem;
                    }
                }
            }

            &__explore{
                width: 100%;
                place-items: end;
                padding: 0px;
                height: 100%;
                &__button{
                    margin-bottom: 100px;
                }
            }
        }
    }
</style>