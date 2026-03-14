import Button from "@/components/ui/Button/Button";

export default function BookForm() {
  return (
    <div className="flex flex-col gap-[24px] p-[32px] border border-[var(--gray-light)] rounded-[10px]">
      <div className="flex flex-col gap-[8px]">
        <h3>Book your car now</h3>
        <p className="font-[500]">
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className="flex flex-col gap-[16px]" action="">
        <input className="!text-[var(--gray)] text-left w-full max-w-full h-[48px] py-[14px] px-[20px] border border-transparent rounded-[12px] placeholder:text-[var(--gray)]" type="text" placeholder="Name*"/>
        <input className="!text-[var(--gray)] text-left w-full max-w-full h-[48px] py-[14px] px-[20px] border border-transparent rounded-[12px] placeholder:text-[var(--gray)]" type="text" placeholder="Email*"/>
        <input className="!text-[var(--gray)] text-left w-full max-w-full h-[48px] py-[14px] px-[20px] border border-transparent rounded-[12px] placeholder:text-[var(--gray)]" type="text" placeholder="Booking date"/>
        <textarea className="!text-[var(--gray)] text-left w-full max-w-full h-[88px] py-[14px] px-[20px] bg-[var(--inputs)] border border-transparent rounded-[12px] placeholder:text-[var(--gray)] resize-none" name="" id="" placeholder="Comment"></textarea>

        <Button className="max-w-[156px] mx-auto mt-[8px]" text="Send" />
      </form>
    </div>
  );
}
