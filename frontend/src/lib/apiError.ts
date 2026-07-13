import axios, { type AxiosError } from "axios";

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{
      detail?: string;
      message?: string;
    }>;

    return (
      axiosError.response?.data?.detail ??
      axiosError.response?.data?.message ??
      axiosError.message ??
      "Unexpected server error."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}
