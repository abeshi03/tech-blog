// - エンドポイント ======================================================================================================
export const BASE_END_POINT: string = process.env.NEXT_PUBLIC_ENDPOINT;

// - ブログ
export const BLOG_END_POINT: string = `${BASE_END_POINT}blog`;

// - プロフィール
export const PROFILE_END_POINT: string = `${BASE_END_POINT}my_profile`;

// - API_KEY ===========================================================================================================
export const X_API_KEY: string = process.env.NEXT_PUBLIC_PROFILE_API_KEY;
