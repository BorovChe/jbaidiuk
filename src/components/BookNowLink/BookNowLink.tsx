import Link from "next/link";

const BookNowLink = () => {
  return (
    <Link
      className="flex items-center justify-center w-40	py-3 uppercase tracking-wider	text-sm	 font-semibold rounded-sm text-[--main-white-txt-cl]	bg-[--accent-cl]"
      href={"/"}
    >
      Записатися
    </Link>
  );
};

export default BookNowLink;
