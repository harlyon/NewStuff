'use strict';

/**
 * Domains.js controller
 *
 * @description: A set of functions called "actions" for managing `Domains`.
 */

module.exports = {

  /**
   * Retrieve domains records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.domains.search(ctx.query);
    } else {
      return strapi.services.domains.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a domains record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.domains.fetch(ctx.params);
  },

  /**
   * Count domains records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.domains.count(ctx.query);
  },

  /**
   * Create a/an domains record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.domains.add(ctx.request.body);
  },

  /**
   * Update a/an domains record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.domains.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an domains record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.domains.remove(ctx.params);
  }
};
