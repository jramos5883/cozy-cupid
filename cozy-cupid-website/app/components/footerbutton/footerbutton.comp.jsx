"use client";

export default function FooterButton() {
  return (
    <>
      <a
        className="fixed bottom-1 left-1/2 transform -translate-x-1/2 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-900 md-tablet:hidden"
        href="https://www.amazon.com/stores/page/A4BB947E-5494-4D8C-B633-60D339B78843?ingress=2&visitId=fb5ad8ac-a8aa-4c6e-9598-b5f22a45ed05&ref_=ast_bln "
        target="_blank"
      >
        Buy Now!
      </a>
      <a
        className="fixed bottom-1 left-1/2 transform -translate-x-1/2 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-900 hidden md-tablet:block"
        href="https://www.amazon.com/stores/page/A4BB947E-5494-4D8C-B633-60D339B78843?ingress=2&visitId=fb5ad8ac-a8aa-4c6e-9598-b5f22a45ed05&ref_=ast_bln "
        target="_blank"
      >
        Buy Now On Amazon!
      </a>
    </>
  );
}
