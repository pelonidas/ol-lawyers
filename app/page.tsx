import RoundText from '@/components/RoundText';
import SealBackgroud from '@/components/SealBackgroud';
import { mdiArrowDown, mdiCloseCircle, mdiSeal } from '@mdi/js';
import Icon from '@mdi/react';
import clsx from 'clsx';
import { BsArrowDown } from 'react-icons/bs';
import { IoRibbon } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import Button from './button';
import RibbonSegment from './ribbon';

export default function Home() {
  return (
    <main>
      <section
        className={'shadow-[0_17px_18px_rgba(0,0,0,0.25)] xl:mt-[100px]'}
      >
        <div
          className={
            'mx-auto mt-6 flex max-w-[740px] flex-col px-8 pb-8 xl:px-0 xl:pb-[75px]'
          }
        >
          <h1
            className={
              'text-center font-playfair text-3xl font-medium xl:mx-auto xl:max-w-[540px] xl:text-5xl'
            }
          >
            Garantované výsledky ONLINE marketingu pre{' '}
            <span className={'font-extrabold'}>elitné právnické firmy</span>
          </h1>
          <RibbonSegment className={'my-4 xl:my-1'} variant={'dark'} />
          <p className={'text-center font-raleway xl:text-2xl'}>
            Dedikované výsledky web stránok a výkonostných kampaní pre tých
            najlepších v právnickom odvetvií
          </p>
          <Button className={'mt-8 xl:mx-auto xl:max-w-[325px]'}>
            Získať ONLINE stratégiu
          </Button>
        </div>
      </section>

      <section className={'bg-primaryDarker py-8 xl:py-[80px]'}>
        <div className={'container gap-[145px] xl:flex'}>
          <div
            className={'text-center xl:max-w-[620px] xl:shrink-0 xl:text-start'}
          >
            <h2 className={'font-playfair text-2xl font-semibold xl:text-5xl'}>
              Prečo ONLINE Marketing?
            </h2>
            <p className={'mt-4 mb-7 font-raleway xl:mb-4 xl:mt-8 xl:text-xl'}>
              Narovinu - stránka bez klientov je ako postaviť si pobočku v
              strede púšte bez žiadnej cesty smerujúcej k nej.
            </p>
            <hr className={'hidden w-[75px] border-[#ECEAD7] xl:block'} />
            <div className={'relative xl:mt-16'}>
              <div className={'absolute bottom-5 left-1 xl:left-24'}>
                <RoundText />
                <BsArrowDown
                  className={'absolute inset-0 m-auto text-2xl xl:text-6xl'}
                />
              </div>
              <div
                className={
                  'ml-auto h-[260px] w-[260px] bg-slate-600 xl:h-[440px] xl:w-[440px]'
                }
              ></div>
            </div>
          </div>
          <div className={'mt-8 flex flex-col xl:mt-0'}>
            <p
              className={
                'mb-6 text-center font-raleway xl:mb-0 xl:mt-auto xl:text-start xl:text-xl'
              }
            >
              <span className={'font-bold'}>
                Tu prichádza ONLINE Marketing.
              </span>{' '}
              Marketing je ako “Digitálna cesta”, ktorá vedie vášho vysneného
              klienta ku vám s kreditnou kartou v jeho ruke
            </p>
            <div
              className={'h-[315px] bg-slate-600 xl:order-first xl:h-[510px]'}
            ></div>
          </div>
        </div>
      </section>

      <section className={'bg-white py-8 xl:py-[80px]'}>
        <div
          className={
            'container flex flex-col gap-8 xl:grid xl:grid-cols-3 xl:gap-16'
          }
        >
          <div
            className={
              'flex flex-col bg-primaryDarker px-5 py-8 text-center shadow-[0_17px_18px_rgba(0,0,0,0.25)] xl:px-4 xl:py-10'
            }
          >
            <div className={'relative mx-auto'}>
              <div
                className={
                  'absolute -left-3 top-2 h-8 w-8 rounded-full bg-[#ECEAD7]'
                }
              />
              <div
                className={
                  'h-20 w-20 rounded-full bg-primary/5 backdrop-blur-[35px]'
                }
              ></div>
            </div>
            <h4
              className={
                'my-4 font-playfair text-xl font-semibold xl:mx-auto xl:max-w-[240px] xl:text-2xl'
              }
            >
              Efektívne online kampane
            </h4>
            <p className={'font-raleway'}>
              Vytvoríme vám kampane s jediným cieľom. Predať. Oslovíme vašu
              cieľovú skupinu, ktorá má pre vás najväčšiu hodnotu, tak aby
              chcela spolupracovať práve s vami.
            </p>
          </div>
        </div>
      </section>

      <section
        className={'bg-primaryDarker px-8 pt-8 pb-16 xl:px-0 xl:py-[80px]'}
      >
        <h2
          className={
            'text-center font-playfair text-2xl xl:mx-auto xl:max-w-[600px] xl:text-[40px] xl:leading-[55px]'
          }
        >
          Online kampane ako kľúč k vášmu online úspechu
        </h2>
        <RibbonSegment
          className={'my-4 mx-auto max-w-[600px]'}
          variant={'darker'}
        />
        <p
          className={
            'mb-8 mt-4 text-center font-raleway xl:mx-auto xl:max-w-[815px] xl:text-xl'
          }
        >
          Je to rozdiel medzi 1,929,999,999 stránkami ktoré nezarábajú peniaze a
          0.000000002%, ktoré zarabajú
        </p>
        <div
          className={
            'mx-auto flex flex-col xl:grid xl:max-w-[945px] xl:grid-cols-2 xl:gap-[95px]'
          }
        >
          <div
            className={
              'flex h-[315px] items-center justify-center bg-primary xl:h-[425px]'
            }
          >
            <div
              className={'relative flex h-[95%] w-[95%] border border-white'}
            >
              {/* Top right */}
              <div
                className={
                  'absolute top-[10px] right-[10px] h-[70px] w-10 border-t border-r border-white'
                }
              >
                <div
                  className={
                    'absolute top-[10px] right-[10px] h-8 w-3 border-t border-r'
                  }
                />
              </div>
              {/* Bottom left */}
              <div
                className={
                  'absolute bottom-[10px] left-[10px] h-[70px] w-10 border-b border-l border-white'
                }
              >
                <div
                  className={
                    'absolute bottom-[10px] left-[10px] h-8 w-3 border-b border-l'
                  }
                />
              </div>

              <div className={'m-auto'}>
                <h3
                  className={'font-playfair text-2xl font-semibold xl:text-3xl'}
                >
                  Bez kampaní
                </h3>
                <ul className={'mt-6 flex flex-col gap-3'}>
                  {[
                    'Nestabilny tok klientov',
                    'Chaotické získavanie klientov',
                    'Slabé povedomie o značke',
                    'Smútok',
                  ].map((text, key) => (
                    <li
                      key={key}
                      className={'flex items-center gap-2 font-raleway'}
                    >
                      <MdCancel
                        color={'#D94741'}
                        className={'text-xl xl:text-[25px]'}
                      />
                      <span className={'font-light xl:text-xl'}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          'container relative flex flex-col pt-16 pb-8 text-center xl:pb-16'
        }
      >
        <div className={'absolute -top-[30px] self-center'}>
          <SealBackgroud size={60} />
          <IoRibbon className={'absolute inset-0 m-auto text-[25px]'} />
        </div>
        <h5 className={'font-raleway xl:text-xl'}>Radi cítite opak smútku?</h5>
        <h2
          className={
            'mt-6 mb-8 font-playfair text-3xl xl:mx-auto xl:max-w-[625px]'
          }
        >
          Získajte bezplatnú konzultáciu určenú právnické kancelárie
        </h2>
        <Button className={'xl:mx-auto xl:max-w-[385px] xl:text-xl'}>
          Získať konzultáciu zadarmo
        </Button>
      </section>

      <section className={'bg-white py-8 text-primary xl:py-20'}>
        <div className={'container flex flex-col xl:items-center'}>
          <h2 className={'text-center font-playfair text-3xl'}>
            Pre koho je <span className={'font-bold'}>Online Launch</span>{' '}
            určený?
          </h2>
          <RibbonSegment
            variant={'light'}
            className={'mt-4 mb-6 xl:mb-10 xl:max-w-[600px]'}
          />
          <div
            className={
              'grid grid-cols-2 text-center font-raleway font-medium xl:w-full xl:max-w-[1150px] xl:grid-cols-4 xl:divide-x'
            }
          >
            <div className={'pr-2 pb-4 xl:p-0'}>
              <div className={'relative mx-auto mb-4 w-min'}>
                <div
                  className={
                    'absolute -right-[7px] top-[4px] h-4 w-4 rounded-full bg-primaryDarker'
                  }
                />
                <div
                  className={
                    'h-9 w-9 rounded-full bg-black/5 backdrop-blur-[35px]'
                  }
                ></div>
              </div>
              <p className={'xl:mx-auto xl:max-w-[180px] xl:text-xl'}>
                Pre začínajúcu právnicku kanceláriu
              </p>
            </div>

            <div
              className={'border-l border-primary pl-2 pb-4 xl:border-0 xl:p-0'}
            >
              <div className={'relative mx-auto mb-4 w-min'}>
                <div
                  className={
                    'absolute -right-[6px] bottom-[2px] h-4 w-4 rounded-full bg-primaryDarker'
                  }
                />
                <div
                  className={
                    'h-9 w-9 rounded-full bg-black/5 backdrop-blur-[35px]'
                  }
                ></div>
              </div>
              <p className={'xl:mx-auto xl:max-w-[180px] xl:text-xl'}>
                Pre právnicku kanceláriu bez výsledkov online
              </p>
            </div>

            <div
              className={'border-t border-primary pt-4 pr-2 xl:border-0 xl:p-0'}
            >
              <div className={'relative mx-auto mb-4 w-min'}>
                <div
                  className={
                    'absolute -left-[6px] bottom-[2px] h-4 w-4 rounded-full bg-primaryDarker'
                  }
                />
                <div
                  className={
                    'h-9 w-9 rounded-full bg-black/5 backdrop-blur-[35px]'
                  }
                ></div>
              </div>
              <p className={'xl:mx-auto xl:max-w-[180px] xl:text-xl'}>
                Pre právnicke kancelárie bez online stratégie
              </p>
            </div>

            <div
              className={
                'border-t border-l border-primary pt-4 pl-2 xl:border-0 xl:p-0'
              }
            >
              <div className={'relative mx-auto mb-4 w-min'}>
                <div
                  className={
                    'absolute -left-[7px] top-[4px] h-4 w-4 rounded-full bg-primaryDarker'
                  }
                />
                <div
                  className={
                    'h-9 w-9 rounded-full bg-black/5 backdrop-blur-[35px]'
                  }
                ></div>
              </div>
              <p className={'xl:mx-auto xl:max-w-[180px] xl:text-xl'}>
                Pre právnikov, ktorí chcú rásť
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={'bg-primary xl:relative xl:bg-primaryDarker xl:py-20'}
      >
        <div
          className={
            'absolute inset-y-0 left-0 right-[30%] hidden bg-primary xl:block'
          }
        ></div>
        <div className={'xl:mx-auto xl:flex xl:max-w-[1285px] xl:gap-28'}>
          <div
            className={
              'container bg-primaryDarker pt-8 pb-6 xl:z-20 xl:order-last xl:max-w-[510px] xl:bg-transparent xl:pt-0'
            }
          >
            <div
              className={'text-center font-raleway text-white/80 xl:text-start'}
            >
              <div className={'h-[400px] bg-slate-400 xl:h-[650px]'} />
              <div className={'xl:pl-[280px]'}>
                <h5 className={'mt-4 mb-2 text-xl'}>Jozko mrkvicka</h5>
                <h6 className={'font-light'}>CEO & Founder</h6>
              </div>
            </div>
          </div>
          <div
            className={
              'container pt-6 pb-8 font-raleway text-white xl:z-20 xl:p-0'
            }
          >
            <h2 className={'font-playfair text-3xl'}>
              Získajte konzultáciu pre vás,
            </h2>
            <p className={'mt-2 mb-6 text-xl text-white/80 xl:text-2xl'}>
              vďaka ktorej zistíte potenciál online sveta.
            </p>
            <p className={'xl:mt-9 xl:text-xl'}>
              Vďaka tejto{' '}
              <span className={'font-semibold'}>bezplatnej konzultácií</span>{' '}
              budete jasne rozumieť ďalším krokom, ktoré môžete podniknúť, aby
              vaša kancelária začala generovať konzistentné a spoľahlivé
              výsledky s online kampanami
            </p>
            <h3
              className={
                'mt-8 mb-6 font-playfair text-xl font-semibold xl:mt-16 xl:mb-9 xl:text-2xl'
              }
            >
              Táto konzultácia je dokonalá pre:
            </h3>
            <ul className={'flex flex-col gap-7'}>
              {[
                <>
                  Kancelárie, ktoré chcú previesť svoje súčasné webové stránky
                  na{' '}
                  <span className={'font-bold'}>
                    vysokokvalitný a efektívny
                  </span>{' '}
                  online marketing.
                </>,
                <>
                  Kancelárie, ktoré chcú preniesť svoje offline podnikanie do{' '}
                  <span className={'font-bold'}>online sveta</span>.
                </>,
                <>
                  Kancelárie ktoré chcú porozumieť tomu ako dokážu zlepšiť{' '}
                  <span className={'font-bold'}>ich výsledky</span> v online
                  priestore pomocou kampaní.
                </>,
                <>
                  Kancelárie, ktoré hľadajú príležitosť ako maximalizovať{' '}
                  <span className={'font-bold'}>
                    množstvo a hodnotu dopytov
                  </span>
                  .
                </>,
                <>
                  Kancelárie, ktoré hľadajú{' '}
                  <span className={'font-bold'}>spoľahlivú agentúru</span>,
                  vďaka ktorej bude ich spoločnosť prioritou.
                </>,
              ].map((item, index) => (
                <li className={'flex gap-7 xl:text-xl'} key={index}>
                  <div className={'relative'}>
                    <div
                      className={
                        'absolute -right-[1px] top-0 h-2 w-2 rounded-full bg-[#ECEAD7] xl:h-[10px] xl:w-[10px]'
                      }
                    />
                    <div
                      className={
                        'h-4 w-4 rounded-full bg-white/5 backdrop-blur-[35px] xl:h-8 xl:w-8'
                      }
                    ></div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className={'mt-8 w-full xl:hidden'}>
              Získať Konzultáciu Zadarmo
            </Button>
          </div>
        </div>
        <Button
          className={
            'mx-auto hidden xl:relative xl:z-50 xl:mt-16 xl:block xl:max-w-[380px]'
          }
        >
          Získať Konzultáciu Zadarmo
        </Button>
      </section>

      <section
        className={
          'bg-primaryDarker px-8 py-8 text-center font-raleway xl:px-0'
        }
      >
        <h5>Máte ďalšie otázky?</h5>
        <h2 className={'mt-6 font-playfair text-3xl'}>
          Napíšte nám ešte dnes!
        </h2>
        <RibbonSegment className={'my-4'} variant={'darker'} />
        <p>
          Naši odborníci na digitálny marketing vytvorili množstvo úspešných
          digitálnych marketingových kampaní pre firmy, ktoré chcú zvýšiť počet
          potenciálnych zákazníkov a kvalitnú návštevnosť webových stránok.
        </p>
        <button className={'btn-primary mt-8 w-full'}>
          Opýtajte sa ešte dnes
        </button>
      </section>
    </main>
  );
}