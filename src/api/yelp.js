import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer tOgaolnUoYLm7CpPRmSRZZZMaz8s86AQh09Jbj4FnkfE1uBwXdyvCHDePP1XTJGmsX_mYKuaG6SvYp_M58wkTGOstkI_I66OWNDQ0bElg4Gso9qrXxxnZnJ8GfopXnYx'
  }
});
