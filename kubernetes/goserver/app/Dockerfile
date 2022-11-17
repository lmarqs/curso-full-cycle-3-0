FROM golang:1-alpine as BUILDER

WORKDIR /go/src/app

COPY *.mod ./

COPY *.go ./

RUN go build -o app .

CMD ["./app"]
