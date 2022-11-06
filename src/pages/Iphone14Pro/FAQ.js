import React from 'react';
import FAQAccordion, {
  QuestionItem,
  Question,
  Answer,
} from '../../components/FAQAccordion';

const Iphone14ProFAQ = () => {
  return (
    <FAQAccordion>
      <QuestionItem>
        <Question>ทำไมจึงควรซื้อ iPhone แบบที่ไม่มีซิมบน apple.com</Question>
        <Answer>
          <p className='text-black leading-normal text-[14px]'>
            iPhone ที่ไม่ได้ผูกอยู่กับผู้ให้บริการและซื้อจาก apple.com
            นั้นเป็นรุ่นปลดล็อค
            ซึ่งหมายความว่าคุณไม่มีข้อผูกมัดกับผู้ให้บริการเครือข่ายรายใดรายหนึ่ง
            หรือกับสัญญาการให้บริการที่มีระยะเวลาหลายปี
            คุณจึงสามารถเลือกเครือข่ายและค่าบริการที่เหมาะกับคุณได้ และเมื่อ
            iPhone เครื่องใหม่ของคุณได้รับการเปิดใช้งานแล้ว
            เครื่องนั้นก็จะยังคงสถานะการปลดล็อคเช่นเดิม
            ซึ่งหมายความว่าคุณสามารถนำไปใช้กับเครือข่ายใดก็ได้ที่มีบริการสำหรับ
            iPhone
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>iPhone เครื่องใหม่ของฉันจะเป็นเครื่องปลดล็อคหรือไม่</Question>
        <Answer>
          <p className='text-black leading-normal text-[14px]'>
            ใช่ iPhone ที่ไม่ได้ผูกอยู่กับผู้ให้บริการและซื้อจาก apple.com
            นั้นเป็นรุ่นปลดล็อค
            ซึ่งหมายความว่าคุณไม่มีข้อผูกมัดกับผู้ให้บริการเครือข่ายรายใดรายหนึ่ง
            หรือกับสัญญาการให้บริการที่มีระยะเวลาหลายปี
            คุณจึงสามารถเลือกผู้ให้บริการที่เหมาะกับคุณได้ และเมื่อ iPhone
            เครื่องใหม่ของคุณได้รับการเปิดใช้งานแล้ว
            เครื่องนั้นก็จะยังคงสถานะการปลดล็อคเช่นเดิม
            ซึ่งหมายความว่าคุณสามารถนำไปใช้กับเครือข่ายใดก็ได้ที่มีบริการสำหรับ
            iPhone
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>
          การถ่ายโอนข้อมูลและตั้งค่า iPhone เครื่องใหม่นั้นง่ายจริงมั้ย
        </Question>
        <Answer>
          <p className="mb-3 text-black leading-normal text-[14px]">
            ง่ายจริง เพราะ iCloud ช่วยให้คุณย้ายการตั้งค่า รูปภาพ แอป
            และเอกสารต่างๆ มายังอุปกรณ์เครื่องใหม่ได้อย่างราบรื่น
            เพียงลงชื่อเข้าใช้ iCloud ขณะตั้งค่าอุปกรณ์เครื่องใหม่
            จากนั้นเข้าถึงข้อมูลสำรอง iCloud ของอุปกรณ์เครื่องก่อนหน้า
            แล้วในไม่กี่นาทีทุกอย่างก็จะพร้อมให้คุณใช้งาน
          </p>
          <p className="mb-3 text-black leading-normal text-[14px]">
            หากมีพื้นที่จัดเก็บข้อมูล iCloud
            ไม่พอที่จะสำรองข้อมูลได้เสร็จสมบูรณ์ iCloud
            จะอนุญาตให้คุณมีพื้นที่จัดเก็บข้อมูลชั่วคราวที่เพียงพอเพื่อให้คุณมั่นใจว่าจะสามารถสำรองข้อมูลจากอุปกรณ์ของคุณและถ่ายโอนข้อมูลทั้งหมดโดยไม่มีค่าใช้จ่าย
            (จำเป็นต้องใช้ iOS 15 )
          </p>
          <p className="mb-3 text-black leading-normal text-[14px]">
            คุณสมบัติ "เริ่มใช้อย่างรวดเร็ว"​
            ให้คุณกู้คืนข้อมูลและคอนเทนต์จากข้อมูลสำรอง iCloud ไปยัง iPhone
            เครื่องใหม่ได้ ซึ่งหากเป็นโทรศัพท์ที่ใช้ iOS 12.4 หรือใหม่กว่า
            คุณสมบัติ "เริ่มใช้อย่างรวดเร็ว"​
            ก็จะมีตัวเลือกให้คุณย้ายข้อมูลระหว่างอุปกรณ์
            ซึ่งช่วยให้คุณสามารถถ่ายโอนข้อมูลทั้งหมดจากเครื่องปัจจุบันไปยังเครื่องใหม่ในแบบไร้สายได้
          </p>
          <p className="mb-3 text-black leading-normal text-[14px]">
            หากคุณย้ายมาจาก Android คุณจำเป็นต้องดาวน์โหลดแอป "ย้ายไปยัง iOS"
            ก่อน แล้วทำตามกระบวนการตั้งค่าบน iPhone เครื่องใหม่
          </p>
          <p className='text-black leading-normal text-[14px]'>
            ดูวิธีถ่ายโอนข้อมูลไปยัง iPhone เครื่องใหม่ได้ที่{' '}
            <a
              href="https://support.apple.com/th-th/HT201269"
              target="_blank"
              rel="noreferrer"
              className="text-apple-blue hover:underline"
            >
              support.apple.com/th-th/HT201269
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>iPhone ใช้งานได้ทั่วโลกหรือไม่</Question>
        <Answer>
          <p className="mb-3 text-black leading-normal text-[14px]">
            iPhone ทุกรุ่นเป็นโทรศัพท์สำหรับการใช้งานทั่วโลก
            คุณจึงสามารถใช้ได้เกือบทุกที่ ไม่ว่าคุณจะเป็นลูกค้าของเครือข่าย GSM
            หรือ CDMA คุณก็สามารถใช้งานโรมมิ่งที่ต่างประเทศบนเครือข่าย GSM
            ในกว่า 200 ประเทศหรือภูมิภาคทั่วโลก หากคุณซื้อ iPhone
            พร้อมบริการด้านการเงินกับผู้ให้บริการเครือข่ายไร้สายของคุณ
            โปรดตรวจสอบการใช้งานโรมมิ่งในต่างประเทศกับผู้ให้บริการเครือข่ายโดยตรง
          </p>
          <p className="mb-3 text-black leading-normal text-[14px]">
            ความพร้อมในการให้บริการข้อมูล 5G และ LTE
            จะแตกต่างกันไปในแต่ละประเทศและภูมิภาค
            และขึ้นอยู่กับคลื่นความถี่วิทยุ 5G และ LTE
            ที่ผู้ให้บริการเครือข่ายโทรศัพท์รองรับ
            โปรดติดต่อผู้ให้บริการเครือข่ายไร้สายของคุณเพื่อสอบถามข้อมูลเพิ่มเติมเกี่ยวกับนโยบายและอัตราค่าบริการสำหรับการใช้งานโรมมิ่งในต่างประเทศ
          </p>
          <p className='text-black leading-normal text-[14px]'>
            <a
              href="https://www.apple.com/th/iphone/LTE"
              target="_blank"
              rel="noreferrer"
              className="text-apple-blue hover:underline leading-normal text-[14px]"
            >
              ข้อมูลการรองรับเครือข่าย 5G และ LTE ของ iPhone
              แยกตามผู้ให้บริการเครือข่ายและประเทศหรือภูมิภาค
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>ผู้ให้บริการเครือข่ายไร้สายรายใดบ้างที่ให้บริการ 5G</Question>
        <Answer>
          <p className='text-black leading-normal text-[14px]'>
            iPhone 13 Pro, iPhone 13 Pro Max, iPhone 13, iPhone 13 mini, iPhone
            12 และ iPhone 12 mini รองรับ 5G และเมื่อต้องการใช้งาน 5G
            คุณจะต้องเปิดใช้งาน iPhone กับผู้ให้บริการเครือข่ายที่มีบริการ 5G
            โดยที่ผู้ให้บริการบางรายอาจกำหนดให้คุณต้องมีแผนบริการ 5G หรือเปลี่ยน
            SIM ใหม่ โปรดสอบถามข้อมูลเพิ่มเติมจากผู้ให้บริการของคุณ
            ดูเพิ่มเติมเกี่ยวกับผู้ให้บริการเครือข่ายในประเทศของคุณ{' '}
            <a
              href="http://support.apple.com/kb/HT204039"
              target="_blank"
              rel="noreferrer"
              className="text-apple-blue hover:underline leading-normal text-[14px]"
            >
              ที่นี่
            </a>
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>
          ตัวเลือกในการจัดส่งมีอะไรบ้าง และฉันจะได้รับสินค้าเมื่อไหร่
        </Question>
        <Answer>
          <p className="mb-3 text-black leading-normal text-[14px]">
            การจัดส่งโดยประมาณนั้นอ้างอิงจากความพร้อมในการจำหน่ายของสินค้าและรูปแบบการจัดส่งที่คุณเลือก
            คุณจะได้รับวันที่จัดส่งขั้นสุดท้ายหลังจากส่งคำสั่งซื้อ
          </p>
          <p className="mb-3 text-black leading-normal text-[14px]">
            การสั่งซื้อทางออนไลน์ทุกรายการจะจัดส่งแบบมาตรฐานโดยไม่เสียค่าจัดส่ง
          </p>
          <p className="mb-3 text-black leading-normal text-[14px]">
            สินค้าของคุณอาจเข้าเกณฑ์การรับสินค้าที่ Apple Store
            ทั้งนี้ขึ้นอยู่กับสถานที่ของคุณ โดยคุณสามารถเลือกมารับสินค้าที่
            Apple Store ใกล้คุณได้ง่ายๆ ในขั้นตอนการชำระเงิน
          </p>
          <p className='text-black leading-normal text-[14px]'>
            รายการสั่งซื้อซึ่งทำผ่าน{' '}
            <a
              href="https://www.apple.com/th/"
              target="_blank"
              rel="noreferrer"
              className="text-apple-blue hover:underline leading-normal text-[14px]"
            >
              apple.com
            </a>{' '}
            สามารถจัดส่งได้ภายในประเทศหรือภูมิภาคที่ทำการสั่งซื้อเท่านั้น
            โปรดไปที่ร้านออนไลน์ของประเทศที่คุณต้องการให้จัดส่งผลิตภัณฑ์ไป
            ที่นี่
          </p>
        </Answer>
      </QuestionItem>
      <QuestionItem>
        <Question>ฉันสามารถส่งคืน iPhone ได้หรือไม่</Question>
        <Answer>
          <p className="mb-3 text-black leading-normal text-[14px]">
            ได้ หากคุณเปลี่ยนใจและไม่ต้องการเก็บ iPhone ของคุณเอาไว้
            คุณสามารถเลือกที่จะส่งคืนมาที่เราได้ โดย iPhone
            ที่ส่งคืนจะต้องอยู่ในสภาพที่ดีและเก็บอยู่ในบรรจุภัณฑ์เดิม
            พร้อมอุปกรณ์เสริม คู่มือ และเอกสารคำแนะนำทั้งหมด ทั้งนี้
            การส่งคืนจะอยู่ภายใต้เงื่อนไขของนโยบายการขายและการคืนเงินของ Apple
          </p>
          <p className='text-black leading-normal text-[14px]'>
            <a
              href="https://www.apple.com/th/shop/help/returns_refund"
              target="_blank"
              rel="noreferrer"
              className="text-apple-blue hover:underline leading-normal text-[14px]"
            >
              ดูเพิ่มเติมเกี่ยวกับการคืนสินค้า การคืนเงิน และการเปลี่ยนสินค้า
            </a>
          </p>
        </Answer>
      </QuestionItem>
    </FAQAccordion>
  );
};

export default Iphone14ProFAQ;
