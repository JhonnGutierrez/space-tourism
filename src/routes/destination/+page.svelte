<script>
    import { fade } from 'svelte/transition'
    import {onMount} from 'svelte'
    import {currentPage, menuVisible, screenNav} from '../currentPage.js'
    export let data;
    const destinations = data.destinations

    let selected = 0

    const changeSelected = (index) => {
        selected = index
    }

    onMount(() => {
        if (screen.width > $screenNav) {
            menuVisible.set(true)
        }
        currentPage.set(window.location.href.split('//')[1].split('/')[1])
    })

</script>

<div id="app">
    <div class="destination">
        <p class="destination__title"><span class="destination__title__span">
            01 </span>pick your destination</p>
        <div class="destination-container">
            <div class="destination__left">
                <div class="destination__left__image-container">
                    {#key selected}
                        <img transition:fade={{duration: 250}}
                        class="destination__left__image" src={destinations[selected].image} alt={destinations[selected].name}>    
                    {/key}
                </div>
            </div>
            <div class="destination__right">
                <ul class="destination__right__select">
                    {#each destinations as d, i}
                        <li class={`destination__right__select__option ${(i === selected && 'active')}`}>
                            <button 
                                on:click={() => {
                                    changeSelected(i)
                                }}
                                class="destination__right__select__option__button"
                            >{d.name}</button>
                        </li>
                    {/each}
                </ul>
        
                <div class="destination__right__info-container">
                    {#key selected}
                        <div class="destination__right__info" transition:fade={{duration: 250}}>
                            <h1 class="destination__right__info__title">{destinations[selected].name}</h1>
                            <p class="destination__right__info__description">{destinations[selected].description}</p>
                            <div class="destination__right__info__length">
                                <div class="destination__right__info__length__measure">
                                    <p class="destination__right__info__length__measure__title">avg. distance</p>
                                    <p class="destination__right__info__length__measure__description">{destinations[selected].distance}</p>
                                </div>
                                <div class="destination__right__info__length__measure">
                                    <p class="destination__right__info__length__measure__title">est. travel time</p>
                                    <p class="destination__right__info__length__measure__description">{destinations[selected].travel}</p>
                                </div>
                            </div>
                        </div>
                    {/key}
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    #app{
        background-image: url(../../lib/destination/background-destination-desktop.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 100vw;
        width: 100vw;
        min-height: 100vh;
    }

    .destination{
        padding-inline: 24px;
        padding-top: 88px;

        &__title{
            font-family: "Barlow Condensed";
            letter-spacing: $spacing;
            text-transform: uppercase;
            text-align: center;
            // font-weight: 400;

            &__span{
                color: $white-alpha;
                margin-inline-end: 18px;
            }
        }
        
        &__left{
            display: flex;
            align-items: center;
            flex-direction: column;
            // background-color: #f00;

            &__image{
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                
                &-container{
                    width: 56vw;
                    position: relative;
                    margin-block: 30px;
                    display: grid;
                    place-items: center;
                    height: 56vw;
                    overflow: hidden;
                }
            }
        }

        &__right{
            &__select{
                display: flex;
                justify-content: center;
                gap: 26px;
                margin-bottom: 20px;
                
                &__option{
                    list-style: none;
                    padding-bottom: 8px;
                    transition: border-bottom-color .5s;
                    border-bottom: 3px solid transparent;
                    
                    &:hover{
                        border-bottom: 3px solid $white-alpha;
                    }
                    
                    &.active{
                        border-bottom: 3px solid $white;
                        
                        &>*{
                            color: $white;
                        }
                    }
                    
                    &__button{
                        cursor: pointer;
                        color: $pastel-blue;
                        letter-spacing: $spacing;
                        font-size: 1.4rem;
                        background-color: transparent;
                        border: none;
                        text-transform: uppercase;
                    }
                }
            }

            &__info{
                position: absolute;

                &-container{
                    height: 473px;
                    position: relative;
                }
                &__title{
                    font-family: "Bellefair";
                    font-size: 5.6rem;
                    text-transform: uppercase;
                    align-items: center;
                    font-weight: 400;
                    text-align: center;
                }

                &__description{
                    font-family: "Barlow";
                    color: $pastel-blue;
                    text-align: center;
                    line-height: 25px;
                    font-size: 1.5rem;
                    padding-bottom: 32px;
                }
                &__length{
                    padding-block: 32px;
                    border-top: 1px solid $grayish-blue;

                    &__measure{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 32px;
                        gap: 12px;

                        &__title{
                            color: $pastel-blue;
                            text-transform: uppercase;
                            letter-spacing: $spacing;
                            font-size: 1.4rem;
                            align-items: center;
                        }

                        &__description{
                            font-family: "Bellefair";
                            text-transform: uppercase;
                            font-size: 2.8rem;
                        }
                    }
                }
            }

        }

        @media (min-width: 597px) {
            padding-inline: 40px;
            padding-top: 136px;

            &__title{
                text-align: start;
                font-size: 2rem;
                
                &__span{
                    font-size: 2rem;
                }
            }

            &__left{
                
                &__image{
                    &-container{
                        margin-block: 60px;
                        width: 300px;
                        height: 300px;
                    }
                }
            }

            &__right{
                padding-inline: 98px;
                &__select{
                    margin-bottom: 32px;
                }

                &__info{
                    &__length{
                        display: flex;
                        justify-content: center;
                        gap: 80px;
                    }
                }
            }
        }

        @media (min-width: 1024px) {
            padding-top: 12%;
            padding-inline: 166px;
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;

            &-container{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                padding-top: 4%;
                gap: 4%;
            }

            &__left{
                padding-left: 98px;
                &__image{
                    &-container{
                        width: 50vh;
                        height: 50vh;
                    }
                }
            }
            &__right{
                // padding: 8vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10%;
                padding-right: 12%;

                &__select{
                    justify-content: flex-start;
                }

                &__info{
                    &__title{
                        text-align: start;
                        font-size: 10rem;
                    }
                    
                    &__description{
                        text-align: start;
                        font-size: 1.8rem;
                    }

                    &__length{
                        justify-content: flex-start;
                        gap: 10%;
                        &__measure{
                            align-items: start;
                        }
                    }

                }
            }
        }
    }

</style>