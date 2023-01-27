FROM node:18

COPY ./ /application
RUN cd /application && yarn && yarn build

EXPOSE 3009
CMD [ "npm", "run", "start" ]
