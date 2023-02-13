<script>
    import {onMount} from 'svelte'
    import {currentPage, menuVisible, screenNav} from '../currentPage.js'
    import {fade} from 'svelte/transition'
    let portraitPic = false
    onMount(() => {
        if (screen.width > $screenNav) {
            menuVisible.set(true)
            if (screen.width > 1024){
                portraitPic = true
            }
        }
        currentPage.set(window.location.href.split('//')[1].split('/')[1])
    })
    export let data;
    const technology = data.technology

    let selected = 0
</script>

<div id="app">
    <div class="technology">
        <p class="technology__title">
            <span class="technology__title__span">03</span>
            space Launch 101
        </p>
        <div class="technology__info">
            <div class="technology__info__right-container">
                {#key selected}
                    <div transition:fade={{duration: 300}} class="technology__info__right">
                        <img class="technology__info__right__image" src={
                            portraitPic ? technology[selected].images.portrait : technology[selected].images.landscape
                        } alt={technology[selected].name}>
                    </div>
                {/key}
            </div>
            <div class="technology__info__left">
                <div class="technology__info__left__select">
                    {#each technology as t, i}
                        <button 
                            on:click={() => {selected = i}}
                            class={`technology__info__left__select__button ${(selected === i) && 'active'}`}
                        >{i+1}</button>
                    {/each}
                </div>
                <div class="technology__info__left__description-container">
                    {#key selected}
                        <div transition:fade={{duration: 300}} class="technology__info__left__description">
                            <p class="technology__info__left__description__p">the terminology...</p>
                            <h1 class="technology__info__left__description__title">{technology[selected].name}</h1>
                            <p class="technology__info__left__description__description">
                                {technology[selected].description}
                            </p>
                        </div>
                    {/key}
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    #app{
        background-image: url(../../lib/technology/background-technology-mobile.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 100vw;
        width: 100vw;
        min-height: 100vh;
    }

    .technology{
        padding-top: 88px;

        &__title{
            font-family: "Barlow Condensed";
            letter-spacing: $spacing;
            text-transform: uppercase;
            text-align: center;

            &__span{
                color: $white-alpha;
                margin-inline-end: 18px;
            }
        }

        &__info{
            &__right{
                width: 100%;
                margin-block: 32px;
                position: absolute;

                &-container{
                    width: 100%;
                    position: relative;
                    aspect-ratio: 375/170;
                }

                &__image{
                    width: 100%;
                }
            }

            &__left{
                padding-inline: 24px;

                &__select{
                    display: flex;
                    justify-content: center;
                    margin-block: 34px;
                    gap: 16px;
                    
                    &__button{
                        font-family: 'Bellefair';
                        cursor: pointer;
                        height: 40px;
                        width: 40px;
                        border-radius: 50%;
                        background-color: transparent;
                        border: 1px solid $white;

                        &.active{
                            color: $black;
                            background-color: $white;
                        }
                    }
                }

                &__description{
                    text-align: center;
                    width: 100%;
                    position: absolute;
                    
                    &-container{
                        position: relative;
                        // width: calc(100% - 24px * 2);
                    }
                    
                    &__p{
                        width: 100%;
                        font-family: 'Barlow Condensed';
                        font-size: 1.4rem;
                        letter-spacing: $spacing;
                        text-transform: uppercase;
                        margin-bottom: 8px;
                        color: $white-alpha;
                    }
                    
                    &__title{
                        width: 100%;
                        font-family: 'Bellefair';
                        font-size: 2.4rem;
                        text-transform: uppercase;
                        font-weight: 400;
                    }
                    
                    &__description{
                        width: 100%;
                        font-family: 'Barlow';
                        font-size: 1.5rem;
                        line-height: 25px;
                        color: $pastel-blue;
                        margin-block: 16px;
                    }
                }
            }
        }
    }

    @media (min-width: 597px) {
        #app{
            background-image: url(../../lib/technology/background-technology-tablet.jpg);
        }

        .technology{
            padding-top: 136px;

            &__title{
                text-align: start;
                padding-left: 40px;
            }

            &__info{
                &__right{
                    margin-block: 60px;
                }
                
                &__left{
                    // padding-inline: 155px;
                    &__select{
                        margin-block: 80px 44px;
                    }
                    height: 360px;
                    
                    &__description{
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        
                        &__p{
                            font-size: 1.6rem;
                        }
                        
                        &__title{
                            font-size: 4rem;
                        }
                        
                        &__description{
                            width: 458px;
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        #app{
            background-image: url(../../lib/technology/background-technology-desktop.jpg);
            height: 100vh;
        }

        .technology{
            height: 100%;
            padding-top: 12%;
            padding-left: 8%;
            &__info{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                height: 80%;
                
                &__left{
                    // background-color: #f00;
                    height: 100%;
                    grid-column: 1/2;
                    display: flex;
                    &__select{
                        width: 80px;
                        height: 100%;
                        flex-direction: column;
                        gap: 32px;
                        margin: 0;

                        &__button{
                            height: 80px;
                            width: 80px;
                            font-size: 3.2rem;
                        }
                    }

                    &__description{
                        align-items: flex-start;

                        &-container{
                            width: calc(100% - 80px);
                            height: 100%;
                            display: flex;
                            align-items: center;
                            padding-left: 8%;
                        }

                        &__p{
                            font-size: 1.6rem;
                            text-align: start;
                        }

                        &__title{
                            text-align: start;
                            font-size: 5.6rem;
                        }

                        &__description{
                            text-align: start;
                            font-size: 1.8rem;
                        }
                    }
                }

                &__right{
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    display: flex;
                    justify-content: flex-end;
                    
                    &__image{
                        height: 100%;
                        width: auto;
                        object-fit: contain;
                    }
                    &-container{
                        width: 100%;
                        height: 100%;
                        grid-column: 2/3;
                        grid-row: 1/2;
                    }

                }
            }
        }
    }
</style>