const FooterService = {
  getData: async () => {
    let data = await fetch('data/footer_data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    data = await data.json();

    return data.data;
  },
};

export default FooterService;
