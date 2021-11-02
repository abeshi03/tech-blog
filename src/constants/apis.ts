// - エンドポイント ======================================================================================================
export const BASE_END_POINT: string = process.env.NEXT_PUBLIC_ENDPOINT;
export const BLOG_END_POINT: string = `${BASE_END_POINT}blog`;

// - リクエストパラメーター ================================================================================================
export const QUERY_LIMIT: string = "?limit=";

// - API_KEY ===========================================================================================================
export const X_API_KEY: string = process.env.NEXT_PUBLIC_PROFILE_API_KEY;
