import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle().then((result) => {
        if (result.user) {
          navigate("/dashboard");
        }
      });
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,20,40,0.15)] border border-white/60 p-8 md:p-9">
        <h1 className="text-4xl font-light tracking-tight text-gray-800 mb-1">
          Welcome back
        </h1>

        <p className="text-base text-gray-500 font-normal mb-8 border-l-2 border-indigo-200 pl-3">
          Login or create your profile to continue
        </p>

        <button
          className="google-btn w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-5 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 group"
          onClick={handleGoogleSignIn}
        >
          {loading ? (
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 1.6 1.6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--emojione animate-spin"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="#3e4347">
                <path d="M0.358 0.458c0.028 0.005 0.04 0.033 0.028 0.057l-0.08 0.19c-0.01 0.028 -0.038 0.035 -0.06 0.023L0.075 0.623c-0.023 -0.015 -0.033 -0.048 -0.023 -0.075l0.04 -0.095c0.01 -0.025 0.043 -0.043 0.068 -0.038z" />
                <path d="M0.245 0.87c0.023 -0.015 0.05 -0.005 0.063 0.023l0.08 0.19c0.01 0.028 -0.003 0.053 -0.028 0.057l-0.195 0.043c-0.028 0.005 -0.057 -0.01 -0.068 -0.038L0.057 1.05c-0.01 -0.028 0 -0.06 0.023 -0.075z" />
                <path d="M0.458 1.243c0.005 -0.028 0.033 -0.04 0.057 -0.028l0.19 0.08c0.028 0.01 0.035 0.038 0.023 0.063L0.62 1.525c-0.015 0.023 -0.048 0.033 -0.075 0.023L0.45 1.508c-0.025 -0.01 -0.043 -0.043 -0.038 -0.068z" />
                <path d="M0.87 1.355c-0.015 -0.023 -0.005 -0.05 0.023 -0.063l0.19 -0.08c0.028 -0.01 0.053 0.003 0.057 0.028l0.043 0.195c0.005 0.028 -0.01 0.057 -0.038 0.068L1.05 1.543c-0.028 0.01 -0.06 0 -0.075 -0.023z" />
                <path d="M1.243 1.143c-0.028 -0.005 -0.04 -0.033 -0.028 -0.057l0.08 -0.19c0.01 -0.025 0.038 -0.035 0.063 -0.023l0.17 0.107c0.023 0.015 0.033 0.048 0.023 0.075L1.51 1.15c-0.01 0.025 -0.043 0.043 -0.068 0.038z" />
                <path d="M1.355 0.73c-0.023 0.015 -0.05 0.005 -0.063 -0.023l-0.08 -0.19c-0.01 -0.028 0.003 -0.053 0.028 -0.057l0.195 -0.043c0.028 -0.005 0.057 0.01 0.068 0.038l0.04 0.095c0.01 0.025 0 0.06 -0.023 0.075z" />
                <path d="M1.143 0.358c-0.005 0.028 -0.033 0.04 -0.057 0.028l-0.19 -0.08c-0.028 -0.01 -0.035 -0.038 -0.023 -0.063L0.978 0.075c0.015 -0.023 0.048 -0.033 0.075 -0.023l0.095 0.04c0.025 0.01 0.043 0.043 0.038 0.068z" />
                <path d="M0.73 0.245c0.015 0.023 0.005 0.05 -0.023 0.063l-0.19 0.08c-0.025 0.01 -0.053 -0.003 -0.057 -0.028l-0.043 -0.195c-0.005 -0.028 0.01 -0.057 0.038 -0.068L0.55 0.057c0.028 -0.01 0.06 0 0.075 0.023z" />
                <path d="M0.8 0.168C0.45 0.168 0.168 0.45 0.168 0.8S0.45 1.433 0.8 1.433 1.433 1.15 1.433 0.8 1.15 0.168 0.8 0.168m0 1.03c-0.22 0 -0.398 -0.177 -0.398 -0.398S0.58 0.403 0.8 0.403 1.198 0.58 1.198 0.8 1.02 1.198 0.8 1.198" />
              </g>
              <path
                d="M0.8 0.308c-0.273 0 -0.492 0.22 -0.492 0.492S0.528 1.293 0.8 1.293 1.293 1.073 1.293 0.8 1.073 0.308 0.8 0.308m0 0.68c-0.102 0 -0.188 -0.085 -0.188 -0.188s0.085 -0.188 0.188 -0.188 0.188 0.085 0.188 0.188 -0.085 0.188 -0.188 0.188"
                fill="#94989b"
              />
              <path
                d="M0.8 0.425c-0.208 0 -0.375 0.168 -0.375 0.375s0.168 0.375 0.375 0.375 0.375 -0.168 0.375 -0.375 -0.168 -0.375 -0.375 -0.375m0 0.563c-0.102 0 -0.188 -0.085 -0.188 -0.188s0.085 -0.188 0.188 -0.188 0.188 0.085 0.188 0.188 -0.085 0.188 -0.188 0.188"
                fill="#3e4347"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.519 L -25.464 53.519 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.519 C -21.734 52.809 -21.864 52.059 -21.864 51.279 C -21.864 50.499 -21.724 49.749 -21.484 49.039 L -21.484 45.939 L -25.464 45.939 C -26.284 47.479 -26.754 49.209 -26.754 51.279 C -26.754 53.349 -26.284 55.079 -25.464 56.619 L -21.484 53.519 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.939 L -21.484 49.039 C -20.534 46.179 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
          )}

          <span className="text-[15px]">Continue with Google</span>
        </button>

        <div className="mt-8 text-center text-sm text-gray-500 leading-relaxed px-1">
          <p className="font-light">
            Join thousands of developers and designers building the future.
            <span className="block mt-1 text-gray-400">
              Safe, secure, and designed for you.
            </span>
          </p>
        </div>

        <div className="mt-8 text-xs text-center text-gray-400 border-t border-gray-100/80 pt-5">
          <p>
            By clicking continue, you agree to our
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-gray-300 px-0.5">and</span>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* <div className="flex justify-center mt-4">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-gray-300 border border-gray-200/50 px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-amber-200 rounded-full"></span>
            light theme · minimal
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default SignIn;
