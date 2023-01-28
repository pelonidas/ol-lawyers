import RoundText from '@/components/RoundText';
import SealBackgroud from '@/components/SealBackgroud';
import { mdiArrowDown, mdiCloseCircle, mdiSeal } from '@mdi/js';
import Icon from '@mdi/react';
import clsx from 'clsx';

export default function Home() {
  return (
    <main>
      <section
        className={
          'mt-6 flex flex-col px-8 pb-8 shadow-[0_17px_18px_rgba(0,0,0,0.25)] xl:px-0'
        }
      >
        <h1 className={'text-center font-playfair text-3xl font-medium'}>
          Garantované výsledky ONLINE marketingu pre{' '}
          <span className={'font-bold'}>elitné právnické firmy</span>
        </h1>
        <RibbonSegment className={'my-4'} variant={'dark'} />
        <p className={'text-center font-raleway'}>
          Dedikované výsledky web stránok a výkonostných kampaní pre tých
          najlepších v právnickom odvetvií
        </p>
        <button className={'btn-primary mt-8'}>Získať ONLINE stratégiu</button>
      </section>

      <section className={'container bg-primaryDarker py-8'}>
        <div>
          <h2 className={'text-center font-playfair text-2xl font-semibold'}>
            Prečo ONLINE Marketing?
          </h2>
          <p className={'mt-4 mb-7 text-center font-raleway'}>
            Narovinu - stránka bez klientov je ako postaviť si pobočku v strede
            púšte bez žiadnej cesty smerujúcej k nej.
          </p>
          <div className={'relative'}>
            <div className={'absolute bottom-5 left-1'}>
              <RoundText />
              <Icon
                path={mdiArrowDown}
                className={'absolute inset-0 m-auto'}
                size={1.5}
              />
            </div>
            <div className={'ml-auto h-[260px] w-[260px] bg-slate-600'}></div>
          </div>
        </div>
        <div className={'mt-8'}>
          <p className={'mb-6 text-center font-raleway'}>
            <span className={'font-bold'}>Tu prichádza ONLINE Marketing.</span>{' '}
            Marketing je ako “Digitálna cesta”, ktorá vedie vášho vysneného
            klienta ku vám s kreditnou kartou v jeho ruke
          </p>
          <div className={'h-[315px] bg-slate-600'}></div>
        </div>
      </section>

      <section className={'bg-white py-8'}>
        <div className={'container flex flex-col gap-8'}>
          <div
            className={
              'flex flex-col bg-primaryDarker px-5 py-8 text-center shadow-[0_17px_18px_rgba(0,0,0,0.25)]'
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
            <h4 className={'mt-4 font-playfair text-xl font-semibold'}>
              Efektívne online kampane
            </h4>
            <p className={'mt-4 font-raleway'}>
              Vytvoríme vám kampane s jediným cieľom. Predať. Oslovíme vašu
              cieľovú skupinu, ktorá má pre vás najväčšiu hodnotu, tak aby
              chcela spolupracovať práve s vami.
            </p>
          </div>
          <div
            className={
              'flex flex-col bg-primaryDarker px-3 py-8 text-center shadow-[0_17px_18px_rgba(0,0,0,0.25)]'
            }
          >
            <div className={'relative mx-auto'}>
              <div
                className={
                  'absolute -right-3 bottom-2 h-8 w-8 rounded-full bg-[#ECEAD7]'
                }
              />
              <div
                className={
                  'h-20 w-20 rounded-full bg-primary/5 backdrop-blur-[35px]'
                }
              ></div>
            </div>
            <h4 className={'mt-4 font-playfair text-xl font-semibold'}>
              Unikátny copywritting a predajné vizuály
            </h4>
            <p className={'mt-4 font-raleway'}>
              Prezentácia a budovanie značky naprieč všetkými kanálmi je veľmi
              dôležitou súčasťou celého online marketignu. Zastrešíme vašu
              prezentáciu ako na webe, tak aj na sociálnych sieťach.
            </p>
          </div>
          <div
            className={
              'flex flex-col bg-primaryDarker px-5 py-8 text-center shadow-[0_17px_18px_rgba(0,0,0,0.25)]'
            }
          >
            <div className={'relative mx-auto'}>
              <div
                className={
                  'absolute -left-3 bottom-2 h-8 w-8 rounded-full bg-[#ECEAD7]'
                }
              />
              <div
                className={
                  'h-20 w-20 rounded-full bg-primary/5 backdrop-blur-[35px]'
                }
              ></div>
            </div>
            <h4 className={'mt-4 font-playfair text-xl font-semibold'}>
              Moderný dizajn s úlohou získavania klientov
            </h4>
            <p className={'mt-4 font-raleway'}>
              Hlavnou úlohou webstránky, je urobiť z potencionálnych zákazníkov
              vašich klientov. Docielíme to pomocou jasnej štruktúry, textov a
              dizajnu určeného na predaj.
            </p>
          </div>
        </div>
      </section>

      <section className={'bg-primaryDarker px-8 pt-8 pb-16 xl:px-0'}>
        <h2 className={'text-center font-playfair text-2xl'}>
          Online kampane ako kľúč k vášmu online úspechu
        </h2>
        <RibbonSegment className={'my-4'} variant={'darker'} />
        <p className={'mb-8 mt-4 text-center font-raleway'}>
          Je to rozdiel medzi 1,929,999,999 stránkami ktoré nezarábajú peniaze a
          0.000000002%, ktoré zarabajú
        </p>
        <div className={'flex flex-col'}>
          <div
            className={'flex h-[315px] items-center justify-center bg-primary'}
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
                <h3 className={'font-playfair text-2xl font-semibold'}>
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
                      <Icon
                        path={mdiCloseCircle}
                        color="#D94741"
                        size={'20px'}
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={'container relative flex flex-col pt-16 pb-8 text-center'}
      >
        <div className={'absolute -top-[30px] self-center'}>
          <SealBackgroud size={60} />
          <Icon
            path={mdiSeal}
            className={'absolute inset-0 m-auto'}
            size={'22px'}
          />
        </div>
        <h5 className={'font-raleway'}>Radi cítite opak smútku?</h5>
        <h2 className={'mt-6 mb-8 font-playfair text-3xl'}>
          Získajte bezplatnú konzultáciu určenú právnické kancelárie
        </h2>
        <button className={'btn-primary'}>Získať konzultáciu zadarmo</button>
      </section>

      <section className={'container flex flex-col bg-white py-8 text-primary'}>
        <h2 className={'text-center font-playfair text-3xl'}>
          Pre koho je <span className={'font-bold'}>Online Launch</span> určený?
        </h2>
        <RibbonSegment variant={'light'} className={'mt-4 mb-6'} />
        <div
          className={'grid grid-cols-2 text-center font-raleway font-medium'}
        >
          <div className={'pr-2 pb-4'}>
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
            <p>Pre začínajúcu právnicku kanceláriu</p>
          </div>

          <div className={'border-l border-primary pl-2 pb-4'}>
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
            <p>Pre právnicku kanceláriu bez výsledkov online</p>
          </div>

          <div className={'border-t border-primary pt-4 pr-2'}>
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
            <p>Pre právnicke kancelárie bez online stratégie</p>
          </div>

          <div className={'border-t border-l border-primary pt-4 pl-2'}>
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
            <p>Pre právnikov, ktorí chcú rásť</p>
          </div>
        </div>
      </section>

      <section className={'bg-primary'}>
        <div className={'container bg-primaryDarker pt-8 pb-6'}>
          <div className={'text-center font-raleway text-white/80'}>
            <div className={'h-[400px] bg-slate-400'} />
            <h5 className={'mt-4 mb-2 text-xl'}>Jozko mrkvicka</h5>
            <h6 className={'font-light'}>CEO & Founder</h6>
          </div>
        </div>
        <div className={'container pt-6 pb-8 font-raleway text-white'}>
          <h2 className={'font-playfair text-3xl'}>
            Získajte konzultáciu pre vás,
          </h2>
          <p className={'mt-2 mb-6 text-xl text-white/80'}>
            vďaka ktorej zistíte potenciál online sveta.
          </p>
          <p>
            Vďaka tejto{' '}
            <span className={'font-semibold'}>bezplatnej konzultácií</span>{' '}
            budete jasne rozumieť ďalším krokom, ktoré môžete podniknúť, aby
            vaša kancelária začala generovať konzistentné a spoľahlivé výsledky
            s online kampanami
          </p>
          <h3 className={'mt-8 mb-6 font-playfair text-xl font-semibold'}>
            Táto konzultácia je dokonalá pre:
          </h3>
          <ul className={'flex flex-col gap-7'}>
            {[
              <>
                Kancelárie, ktoré chcú previesť svoje súčasné webové stránky na{' '}
                <span className={'font-bold'}>vysokokvalitný a efektívny</span>{' '}
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
                <span className={'font-bold'}>množstvo a hodnotu dopytov</span>.
              </>,
              <>
                Kancelárie, ktoré hľadajú{' '}
                <span className={'font-bold'}>spoľahlivú agentúru</span>, vďaka
                ktorej bude ich spoločnosť prioritou.
              </>,
            ].map((item, index) => (
              <li className={'flex gap-7'} key={index}>
                <div className={'relative'}>
                  <div
                    className={
                      'absolute -right-[1px] top-0 h-2 w-2 rounded-full bg-[#ECEAD7]'
                    }
                  />
                  <div
                    className={
                      'h-4 w-4 rounded-full bg-white/5 backdrop-blur-[35px]'
                    }
                  ></div>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className={'btn-primary mt-8 w-full'}>
            Získať Konzultáciu Zadarmo
          </button>
        </div>
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

export function RibbonSegment({
  variant,
  className,
}: {
  variant: 'dark' | 'light' | 'darker';
  className?: string;
}) {
  return (
    <div className={`relative flex h-[40px] items-center ${className}`}>
      <hr
        className={`w-full border-dashed ${clsx({
          'border-primary': variant === 'light',
          'border-white': variant === 'dark' || variant === 'darker',
        })}`}
      />
      <Icon
        color={variant === 'light' ? '#1E2D3D' : '#fff'}
        path={mdiSeal}
        className={`absolute inset-0 mx-auto h-full shrink-0 px-1 ${clsx({
          'bg-white': variant === 'light',
          'bg-primary': variant === 'dark',
          'bg-primaryDarker': variant === 'darker',
        })}`}
        size={'40px'}
      />
    </div>
  );
}
