import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    // return {
    //   title: 'Grand Old Mansion',
    //   owner: 'Veruca Salt',
    //   city: 'San Francisco',
    //   location: {
    //     lat: 37.7749,
    //     lng: -122.4194,
    //   },
    //   category: 'Estate',
    //   type: 'Standalone',
    //   bedrooms: 15,
    // };
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();
    let { attributes } = data[0];
    return attributes;
    // console.log(data);
    // data.map((element) => {
    //   let { attributes } = element;
    //   console.log(attributes);
    //   return attributes;
    // });
  }
}
