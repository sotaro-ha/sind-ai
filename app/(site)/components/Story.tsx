// app/(site)/components/Story.tsx

/**
 * 「Caretomo」という名前の由来やストーリー
 */
export default function Story() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          名前「Caretomo」について
        </h2>
        <p className="text-sm text-gray-700">
          由来：
          <br />
          Care（ケア） + Tomo（友）から命名しています。
          <br />
          介護に携わる方々を支え、情報を友のように共有しあう仕組みを目指しています。
        </p>
      </div>
    </section>
  );
}
