const SignUpSucceedPage = () => {
  const onSubmit = () => {
    return;
  };
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center py-12 px-10 sm:px-6 lg:px-8 lg:w-1/2 lg:mx-auto">
        <h2
          className="mt-10 text-center text-41 font-kurobara leading-9 tracking-tight"
          style={{ marginTop: "100px" }}
        >
          アカウント<br></br>
          <div className="mt-2"></div>登 録 申 請
        </h2>
        <form className="mt-10 space-y-6" onSubmit={onSubmit}>
          <p
            className="text-xs font-source-han-sans-jp text-sm text-gray-500"
            style={{ marginTop: "84px" }}
          >
            アカウント登録申請が完了しました。<br></br>
            管理者によるアカウントの認証が完了するま<br></br>
            で少々お待ちください。
          </p>
          <div className="mt-15">
            <button
              type="submit"
              id="login"
              className="mt-28 flex w-full justify-center rounded-md bg-violet-700 px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{ marginTop: "136px" }}
            >
              TOPへ戻る
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpSucceedPage;
