const handleErrors = (status: number, data: any) => {
  if (status >= 300 && status < 400) {
    const redirectMessage = data?.message ?? 'Unknown Request Redirect';
    console.warn(redirectMessage);
  } else if (status >= 400 && status < 500) {
    const errorMessage = data?.message ?? 'Unknown Request Error';
    throw new Error(errorMessage);
  } else if (status >= 500) {
    const errorMessage = data?.message ?? 'Unknown Server Error';
    throw new Error(errorMessage);
  }
};

export default handleErrors;
