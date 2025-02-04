"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import diabetes from "../../../../public/assets/images/Diabetes-Offer-1.png";
import big from "../../../../public/assets/images/Diabetes-big.png";
import jack from "../../../../public/assets/images/jack.jpg";
import fidelis from "../../../../public/assets/images/fidelis.jpg";
import sarah from "../../../../public/assets/images/sarah.jpg";
import stars from "../../../../public/assets/images/stars.svg";
import bottles from "../../../../public/assets/images/Diabetes-bottles.png";
import natural from "../../../../public/assets/images/Diabetes-natural.png";
import one from "../../../../public/assets/images/istockphoto-1.jpg";
import two from "../../../../public/assets/images/istockphoto-2.jpg";
import three from "../../../../public/assets/images/istockphoto-3.jpg";
import rita from "../../../../public/assets/images/rita.jpg";
import anita from "../../../../public/assets/images/anita.jpg";


import Link from "next/link";
import styles from "../homepage/styles.module.scss";
import { FaCaretDown } from "react-icons/fa";
import four from "../../../../public/assets/images/Arjuna-4.png";
import eleven from "../../../../public/assets/images/Arjuna-11.png";
import nafdac from "../../../../public/assets/images/nafdac.png";
import guy from "../../../../public/assets/images/guy.png";
import Arjunaa from "../../../../public/assets/images/Arjuna-6.png";
import Arjuna from "../../../../public/assets/images/Arjuna.png";
import double from "../../../../public/assets/images/double.png";
import tee from "../../../../public/assets/images/tee.png";
import felicia from "../../../../public/assets/images/felicia.jpg";
import cap from "../../../../public/assets/images/cap.jpg";
import indian from "../../../../public/assets/images/indian.png";
import pass from "../../../../public/assets/images/pass.png";
import heart from "../../../../public/assets/images/heart.gif";
import autistic from "../../../../public/assets/images/autistic.png";
import tree from "../../../../public/assets/images/tree.png";
import lasuna from "../../../../public/assets/images/lasuna.png";

export default function LandingPage() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const accordionData = [
    {
      id: 1,
      content: "Is Madhuhara NAFDAC Approved?",
      answer:
        "Yes, Madhuhara is NAFDAC approved, meaning it has been thoroughly tested and certified as safe and effective for use.",
    },
    {
      id: 2,
      content: "Can it really reverse diabetes? ",
      answer:
        "Yes. It works by stabilizing blood sugar levels, repairing damaged cells, and supporting your body’s natural healing process.",
    },
    {
      id: 3,
      content: "Does it have any side effects?",
      answer:
        "No. It’s made from 100% natural ingredients with no harmful chemicals or side effects.",
    },
    {
      id: 4,
      content: "How long will it take to see results?",
      answer: "Results vary depending on the individual.",
      text: "But 75% of our customers notice improvements in their energy levels and sugar control within 2–4 weeks.",
      show: "We recommend using it for at least 2–3 months for BEST results",
    },
    {
      id: 5,
      content:
        "Can I stop taking my diabetes medications after using Madhuhara?",
      answer:
        "Always consult your doctor before stopping any prescribed medications.",
    },
    {
      id: 6,
      content:
        "I don't have all the money right now, can I order and pay on delivery?",
      answer:
        "Yes. You can order, now and pay on delivery, the day you will be ready",
    },
  ];

  const accordionRef = useRef(null);

  const scrollToAccordion = () => {
    accordionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <p>
          <strong>Advertorial</strong>
        </p>
      </div>
      <div className={styles.doctors_wrapper}>
        <div className={styles.doctors_conatainer}>
          <h2>
            Why Are Doctors In India Recommending <span>Arjuna Bark</span> To Treat
            Hypertension?
          </h2>
          <div className={styles.blood_pressure}>
            <Image
              src={indian}
              alt="big"
              width={200}
              height={100}
              className={styles.big_img}
            />
          </div>
          <div className={styles.blood_pressure_contents}>
            <p>
              Hi, my name is Dr. Chijioke, and if you&apos;re dealing <strong>with
              constant High Blood Pressure</strong>
            </p>
            <b>You may be wondering…</b>
            <div className={styles.blood_pressure_button}>
              <p>
                “Why is my BP always high, even with all the medications
                I&apos;m taking?”
              </p>
            </div>
            <p>
              Listen, <span>It&apos;s NOT your fault,</span>{" "}
            </p>
            <p>Here&apos;s the truth:</p>
            <b>
              Your BP is always high because your arteries are blocked with bad
              cholesterol.
            </b>
            <div className={styles.blood_pressure}>
              <Image
                src={pass}
                alt="star"
                width={100}
                height={100}
                className={styles.stars_img}
              />
            </div>
            <p>When your arteries are blocked…</p>
            <b>
              Your heart has to work extra hard to pump blood through your body.
            </b>
            <p>
              <span>Look at this below</span>
            </p>
            <div className={styles.blood_pressure}>
              <Image
                src={heart}
                alt="star"
                width={100}
                height={100}
                className={styles.stars_img}
              />
            </div>
            <b>
              This pressure is what&apos;s causing your BP to increase all the
              time.
            </b>
            <p>The worst part is…</p>
            <p>If it&apos;s not treated on time…</p>
            <b>
              It can damage the arteries supplying blood to your heart, brain,
              and kidneys…
            </b>
            <b>Leading to heart attack, stroke, and kidney damage.</b>
            <div className={styles.blood_pressure}>
              <Image
                src={autistic}
                alt="star"
                width={100}
                height={100}
                className={styles.stars_img}
              />
            </div>
            <b>But here&apos;s the good news…</b>
            <p>
              <span>There&apos;s a New, natural, and effective way to…</span>
            </p>
            <p><strong>Flush out bad cholesterol from your blood and arteries</strong></p>
            <p><strong>While lowering your BP to a healthy range.</strong></p>
            <b>
              <span>It&apos;s called</span> Arjuna Bark
            </b>
            <div className={styles.blood_pressure}>
              <Image
                src={tree}
                alt="star"
                width={100}
                height={100}
                className={styles.stars_img}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.indians_contents}>
        <div className={styles.guarantee_text}>
          <p>
            <span>Arjuna Bark</span> is a natural remedy that{" "}
            <span>doctors in India</span> have used for hundreds of years to
            treat hypertension.
          </p>
          <p>
            <span>
              I&aposl;s a special plant ingredient that keeps the heart strong
              and balances blood pressure to a healthy level.
            </span>
          </p>
          <p>And now…</p>
          <p>
            It&apos;s available right here in Nigeria and{" "}
            <span>fully approved by NAFDAC.</span>
          </p>
        </div>
      </div>

      <div></div>

      <section className={styles.hero_two_container}>
        <div className={styles.hero_two_container_percent}>
          <div className={styles.hero_two_text}>
            <h2>Introducing...</h2>
          </div>
          <div className={styles.hero_two_contents}>
            <div className={styles.big_image}>
              <Image
                src={lasuna}
                alt="big"
                width={200}
                height={100}
                className={styles.big_img}
              />
            </div>
            <div className={styles.hero_two_contents_board}>
              <div className={styles.hero_two_contents_board_text}>
                <p>
                  The perfect 2-in-1 combo designed to{" "}
                  <span>fight high BP and flush out bad cholesterol.</span>
                </p>
                <ul>
                  <li>Normalize blood pressure.</li>
                  <li>Clear bad cholesterol.</li>
                  <li>Prevents Stroke & Heart Attack.</li>
                  <li>NAFDAC-Approved & 100% Safe.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.howdoesitwork_wrapper}>
        <div className={styles.howdoesitwork_conatiner}>
          <div onClick={scrollToAccordion} className={styles.hero_two_button}>
            <button>Click Here To Order Now</button>
          </div>
          <div className={styles.howdoesitwork_text}>
            <h2>How Does It Work?</h2>
          </div>
          <div className={styles.whatsapp_herb}>
            <div className={styles.whatsapp_img}>
              <div className={styles.last_content}>
                <Image
                  src={four}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <p>
                  <span>Arjuna</span> uses this Powerful{" "}
                  <span>Indian herb (Arjuna Bark)</span> to…
                </p>
                <p>
                  <span>Balance your BP to normal range,</span> improve healthy
                  blood flow, and support your heart functions.
                </p>
              </div>
            </div>
            <div className={styles.whatsapp_img_two}>
              <div className={styles.last_content}>
                <Image
                  src={eleven}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <p>
                  <span>Lasuna fights the root cause of hypertension by…</span>
                </p>
                <p>Flushing out bad cholesterol that blocks your arteries.</p>
                <p>While preventing heart attack, stroke, and kidney damage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.customer_saying_conatiner}>
        <div className={styles.customer_saying_contents}>
          <h2>See What Our Customers Are Saying…</h2>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“My BP Is In Normal Range”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={fidelis}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“It&apos;s a Lifesaver”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={sarah}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.nafdac_container}>
        <div className={styles.hero_two_contents}>
          <div onClick={scrollToAccordion} className={styles.hero_two_button}>
            <button>Click Here To Order Now</button>
          </div>
          <div className={styles.hero_two_text}>
            <h2>Fully APPROVED By NAFDAC.</h2>
          </div>
          <div className={styles.big_image}>
            <Image
              src={nafdac}
              alt="big"
              width={200}
              height={400}
              className={styles.big_img}
            />
          </div>
        </div>
      </section>
      <div className={styles.customer_saying_conatiner}>
        <div className={styles.customer_saying_contents}>
          <h2>More Results From Our Customers.</h2>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“My BP Is In Normal Range”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={fidelis}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“It&apos;s a Lifesaver”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={sarah}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.Cost_wrapper}>
        <div className={styles.Cost_container}>
          <h2>How Much Does It Cost?</h2>
          <div className={styles.guarantee_text}>
            <p>Before I reveal the price, let me ask you this:</p>
            <p>
              Would you rather spend over ₦9 million on heart surgery or stroke
              treatment in India?
            </p>
            <p>
              <span>
                Or would you invest just ₦60,000 today to take control of your
                health?
              </span>
            </p>
            <p>The choice is yours.</p>
          </div>
        </div>
      </section>
      <div className={styles.customer_saying_conatiner}>
        <div className={styles.customer_saying_contents}>
          <h2>Protect Yourself from Heart attack and Stroke Today.</h2>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“This Remedy Is Too Powerful”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={fidelis}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“No Side Effects. No Complications”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={sarah}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Delivery}>
        <h3>Get FREE Delivery When You Order Now</h3>
        <div className={styles.free_shipping_image}>
          <Image
            src={guy}
            alt="free"
            width={100}
            height={150}
            className={styles.free_shipping}
          />
        </div>
      </div>
      <div className={styles.customer_saying_conatiner_three}>
        <div className={styles.customer_saying_contents}>
          <h2>Order 4 Packs or 6 Packs For BEST Results.</h2>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <p>
                  <span>2 Packs </span>
                </p>
              </div>
              <div ref={accordionRef} className={styles.last_content}>
                <Image
                  src={Arjunaa}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <h2>Price N60,000</h2>
                <div className={styles.Delivery_box}>
                  <div className={styles.free_delivery}>
                    <p>FREE DELIVERY</p>
                  </div>
                  <div className={styles.free_delivery}>
                    <p>PAY ON DELIVERY</p>
                  </div>
                  <div className={styles.order_now}>
                    <Link
                      href={
                        "https://isdb.bpfree.xyz/joyfulwellness/madhu/order-page/index.html"
                      }
                    >
                      <button>
                        <div className={styles.order_now_div}>
                          <p>ORDER NOW</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <p>
                  <span>6 Packs </span>
                </p>
                <p>Doctor's Recommended Pack</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={Arjuna}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <h2>Price N240,000</h2>
                <div className={styles.Delivery_box}>
                  <div className={styles.free_delivery}>
                    <p>FREE DELIVERY</p>
                  </div>
                  <div className={styles.free_delivery}>
                    <p>PAY ON DELIVERY</p>
                  </div>
                  <div className={styles.order_now}>
                    <Link
                      href={
                        "https://isdb.bpfree.xyz/joyfulwellness/madhu/order-page/index.html"
                      }
                    >
                      <button>
                        <div className={styles.order_now_div}>
                          <p>ORDER NOW</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <p>
                  <span>3 Packs </span>
                </p>
                <p>69% Of Customers Ordered This Pack</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={double}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <h2>Price N120,000</h2>
                <div className={styles.Delivery_box}>
                  <div className={styles.free_delivery}>
                    <p>FREE DELIVERY</p>
                  </div>
                  <div className={styles.free_delivery}>
                    <p>PAY ON DELIVERY</p>
                  </div>
                  <div className={styles.order_now}>
                    <Link
                      href={
                        "https://isdb.bpfree.xyz/joyfulwellness/madhu/order-page/index.html"
                      }
                    >
                      <button>
                        <div className={styles.order_now_div}>
                          <p>ORDER NOW</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.howmuch_container}>
        <div className={styles.howmuch_contents}>
          <div className={styles.hero_two_text}>
            <h3>Fill The Form Below To Order Now</h3>
          </div>
          <div className={styles.big_image_wrapper}>
            <div className={styles.big_image}>
              <div className={styles.natural_image}>
                <Image
                  src={tee}
                  alt="big"
                  width={200}
                  height={100}
                  className={styles.big_img}
                />
              </div>
              <div className={styles.natural_text}>
                <p>
                  <span>Here&apos;s our promise to you:</span>
                </p>
                <p>
                  Use <span>Arjuna & Lasuna</span> consistently for{" "}
                  <span>90 days</span>.
                </p>
                <p>
                  If you don&apos;t see noticeable improvements in your blood
                  pressure, energy levels, and overall heart health…
                </p>
                <p>Simply out to us.</p>
                <p>
                  We&apos;ll work with you to either{" "}
                  <span>replace your order or refund your money.</span>
                </p>
                <p>No stress, no wahala.</p>
              </div>
            </div>
          </div>
          <div onClick={scrollToAccordion} className={styles.hero_two_button}>
            <button>Click Here To Order Now</button>
          </div>
        </div>
      </section>
      <div className={styles.customer_saying_conatiner_two}>
        <div className={styles.customer_saying_contents}>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“Never had any BP Wahala Since 2 Months Now”</p>
              </div>
              <div className={styles.last_content_one}>
                <Image
                  src={felicia}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
             
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>
                “My BP don dey stable now”
                </p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={cap}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
              <p>
                  “I no believe say natural product fit work. <span>But na Arjuna and
                  Lasuna change my mind. My BP wey no dey ever come down, na im
                  dey stable now.</span> God bless whoever bring this thing come
                  Nigeria.”
                </p>
                <p><span>~Mr. Fred, Enugu.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.click_wrapper}>
        <div onClick={scrollToAccordion} className={styles.click_button}>
          <button>Click Here To Order Now</button>
        </div>
      </div>
      <div className={styles.Frequently}>
        <div className={styles.freq_text}>
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className={styles.accordion_wrapper}>
          <div className={styles.accordion}>
            {accordionData.map(({ id, answer, content, text, show }) => (
              <div key={id} className={styles.accordion_item}>
                <button
                  className={styles.accordion_header}
                  onClick={() => toggleAccordion(id)}
                >
                  <FaCaretDown
                    className={`${styles.icon} ${
                      openId === id ? styles.rotate : ""
                    }`}
                  />
                  {content}
                </button>
                {openId === id && (
                  <div
                    className={`${styles.accordion_content} ${
                      openId === id ? styles.open : ""
                    }`}
                  >
                    <p>{answer}</p>
                    <p>{text}</p>
                    <p>{show}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
