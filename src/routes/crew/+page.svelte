<script>
    import {fade} from 'svelte/transition'
    export let data;
    import {onMount} from 'svelte'
    import {currentPage, menuVisible, screenNav} from '../currentPage.js'
    const crew = data.crew
    
    onMount(() => {
        if (screen.width > $screenNav) {
            menuVisible.set(true)
        }
        currentPage.set(window.location.href.split('//')[1].split('/')[1])
    })
    let selected = 0
</script>

<div id="app">
    <div class="crew">
        <p class="crew__title">
            <span class="crew__title__span">02</span>
            meet your crew
        </p>
        <div class="crew__page">
            <div class="crew__page__left">
                {#key selected}
                    <img transition:fade={{duration: 300}} class="crew__page__left__image" src={crew[selected].image} alt="">
                {/key}
            </div>
            <div class="crew__page__right">
                <div class="crew__page__right__select">
                    {#each crew as c, i}
                        <button 
                            on:click={() => selected = i}
                            class={`crew__page__right__select__button ${(i === selected) && 'active'}`}></button>
                    {/each}
                </div>
                <div class="crew__page__right__info-container">
                    {#key selected}
                        <div transition:fade={{duration: 300}} class="crew__page__right__info">
                            <p class="crew__page__right__info__role">{crew[selected].role}</p>
                            <h1 class="crew__page__right__info__name">{crew[selected].name}</h1>
                            <p class="crew__page__right__info__bio">{crew[selected].bio}</p>
                        </div>
                    {/key}
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    #app{
        background-image: url(../../lib/crew/background-crew-desktop.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 100vw;
        width: 100vw;
        min-height: 100vh;
        background-position: center;
    }

    .crew{
        padding-inline: 24px;
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

        &__page{
            &__left{
                position: relative;
                width: 100%;
                min-height: 223px;
                display: flex;
                justify-content: center;
                margin-block: 32px;
                border-bottom: 2px solid $grayish-blue;
                aspect-ratio: 327/233;
                
                &__image{
                    position: absolute;
                    max-height: 50vh;
                    height: 100%;
                    object-fit: contain;
                }
            }

            &__right{
                width: 100%;
                
                &__select{
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    margin-block: 32px;

                    &__button{
                        cursor: pointer;
                        width: 10px;
                        height: 10px;
                        aspect-ratio: 1/1;
                        border-radius: 50%;
                        border: none;
                        background-color: $white;
                        opacity: .25;

                        &:hover{
                            opacity: .5;
                        }

                        &.active{
                            opacity: 1;
                        }
                    }
                }

                &__info{
                    position: absolute;
                    &-container{
                        position: relative;
                    }

                    &__role{
                        font-size: 16px;
                        font-family: "Bellefair";
                        text-transform: uppercase;
                        text-align: center;
                        color: $white-alpha;
                        margin-bottom: 8px;
                    }
                    
                    &__name{
                        text-align: center;
                        font-family: "Bellefair";
                        font-size: 2.4rem;
                        text-transform: uppercase;
                        font-weight: 400;
                        margin-bottom: 16px;
                    }

                    &__bio{
                        text-align: center;
                        font-family: "Barlow";
                        line-height: 25px;
                        color: $pastel-blue;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    @media (min-width: 597px) {
        #app{
            height: 100vh;
        }

        .crew{
            padding-inline: 40px;
            padding-top: 136px;
            height: 100%;
            overflow: hidden;

            &__title{
                text-align: start;
                font-size: 2rem;
                
                &__span{
                    font-size: 2rem;
                }
            }

            &__page{
                display: flex;
                flex-direction: column-reverse;
                height: 100%;

                &__left{
                    height: 56%;
                    aspect-ratio: auto;
                    border: none;
                    padding: 0;
                    margin: 0;
                }
                
                &__right{
                    height: 44%;
                    display: flex;
                    flex-direction: column-reverse;
                    align-items: center;
                    &__info{
                        &-container{
                            width: 70%;
                            min-height: 50%;
                        }

                        &__role{
                            font-size: 2.4rem;
                        }

                        &__name{
                            font-size: 4rem;
                        }

                        &__bio{
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 1024px) {
        .crew{
            padding-inline: 100px;
            padding-top: 0;
            &__title{
                padding-left: 40px;
                margin-top: 12%;
            }
            &__page{
                // background-color: #f00;
                padding-left: 40px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                height: calc(100% - 12% - 24px);

                &__left{
                    grid-column: 2/3;
                    height: 100%;
                    &__image{
                        height: 100%;
                        max-height: none;
                    }
                }

                &__right{
                    grid-column: 1/2;
                    grid-row: 1/2;
                    align-items: flex-start;
                    justify-content: space-around;
                    height: 100%;

                    &__select{
                        &__button{
                            height: 15px;
                            width: 15px;
                        }
                    }
                    
                    &__info{

                        
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        &-container{
                            width: 100%;
                        }
                        &__role{
                            text-align: start;
                            font-size: 3.2rem;
                        }

                        &__name{
                            text-align: start;
                            font-size: 5.6rem;
                        }

                        &__bio{
                            text-align: start;
                            width: 70%;
                            font-size: 1.8rem;
                        }
                    }
                }
            }
        }
    }
</style>