import Link from "next/link";

const BookNowLink = () => {
  return (
    <Link
      className="flex items-center justify-center w-40	py-3 uppercase tracking-wider	text-sm	 font-semibold rounded-sm text-[--main-white-txt-cl]	bg-[--accent-cl]"
      target="_blank"
      rel="noreferrer noopener"
      href={
        "https://www.instagram.com/jbaidiuk2.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    >
      Записатися
    </Link>
  );
};

export default BookNowLink;
