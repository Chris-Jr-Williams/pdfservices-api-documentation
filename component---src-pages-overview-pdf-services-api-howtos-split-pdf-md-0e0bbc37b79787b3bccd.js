(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4532],{21519:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return g}});var i,a=t(22122),o=t(19756),r=(t(15007),t(64983)),s=t(99536),p=["components"],c={},l=(i="CodeBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),u={_frontmatter:c},d=s.Z;function g(e){var n=e.components,t=(0,o.Z)(e,p);return(0,r.mdx)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"split-pdf"},"Split PDF"),(0,r.mdx)("h2",{id:"split-pdf-by-number-of-pages"},"Split PDF by number of pages"),(0,r.mdx)("p",null,"This operation splits a PDF into multiple smaller documents. Simply use\nthe page count to specify the maximum number of pages of each output\nfile."),(0,r.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFByNumberOfPages\n \n   public class SplitPDFByNumberOfPages {\n  \n     // Initialize the logger.\n     private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFByNumberOfPages.class);\n  \n     public static void main(String[] args) {\n         try {\n             // Initial setup, create credentials instance.\n             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                     .fromFile("pdfservices-api-credentials.json")\n                     .build();\n  \n             // Create an ExecutionContext using credentials and create a new operation instance.\n             ExecutionContext executionContext = ExecutionContext.create(credentials);\n             SplitPDFOperation splitPDFOperation = SplitPDFOperation.createNew();\n  \n             // Set operation input from a source file.\n             FileRef source = FileRef.createFromLocalFile("src/main/resources/splitPDFInput.pdf");\n             splitPDFOperation.setInput(source);\n  \n             // Set the maximum number of pages each of the output files can have.\n             splitPDFOperation.setPageCount(2);\n  \n             // Execute the operation.\n             List result = splitPDFOperation.execute(executionContext);\n  \n             // Save the result to the specified location.\n             int index = 0;\n             for (FileRef fileRef : result) {\n                 fileRef.saveAs("output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");\n                 index++;\n             }\n  \n         } catch (IOException| ServiceApiException | SdkException | ServiceUsageException e) {\n             LOGGER.error("Exception encountered while executing operation", e);\n         }\n     }\n  \n   }\n')),(0,r.mdx)("h4",{id:"net"},".NET"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd SplitPDFByNumberOfPages/\n// dotnet run SplitPDFByNumberOfPages.csproj\n\n   namespace SplitPDFByNumberOfPages\n   {\n     class Program\n     {\n         private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n         static void Main()\n         {\n             //Configure the logging\n             ConfigureLogging();\n             try\n             {\n                 // Initial setup, create credentials instance.\n                 Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                 .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                 .Build();\n  \n                 // Create an ExecutionContext using credentials.\n                 ExecutionContext executionContext = ExecutionContext.Create(credentials);\n  \n                 // Create a new operation instance\n                 SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();\n  \n                 // Set operation input from a source file.\n                 FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");\n                 splitPDFOperation.SetInput(sourceFileRef);\n  \n                 // Set the maximum number of pages each of the output files can have.\n                 splitPDFOperation.SetPageCount(2);\n  \n                 // Execute the operation.\n                 List result = splitPDFOperation.Execute(executionContext);\n  \n                 // Save the result to the specified location.\n                 int index = 0;\n                 foreach (FileRef fileRef in result)\n                 {\n                     fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");\n                     index++;\n                 }\n  \n             }\n             catch (ServiceUsageException ex)\n             {\n                 log.Error("Exception encountered while executing operation", ex);\n             }\n             // Catch more errors here . . .\n         }\n  \n         static void ConfigureLogging()\n         {\n             ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n             XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n         }\n     }\n   }\n')),(0,r.mdx)("h4",{id:"node-js"},"Node JS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/splitpdf/split-pdf-by-number-of-pages.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n try {\n   // Initial setup, create credentials instance.\n   const credentials =  PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   // Create an ExecutionContext using credentials\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n\n   // Create a new operation instance.\n   const splitPDFOperation = PDFServicesSdk.SplitPDF.Operation.createNew(),\n       input = PDFServicesSdk.FileRef.createFromLocalFile(\n           'resources/splitPDFInput.pdf',\n           PDFServicesSdk.SplitPDF.SupportedSourceFormat.pdf\n       );\n   // Set operation input from a source file.\n   splitPDFOperation.setInput(input);\n\n   // Set the maximum number of pages each of the output files can have.\n   splitPDFOperation.setPageCount(2);\n\n   // Execute the operation and Save the result to the specified location.\n   splitPDFOperation.execute(executionContext)\n       .then(result => {\n           let saveFilesPromises = [];\n           for(let i = 0; i < result.length; i++){\n               saveFilesPromises.push(result[i].saveAsFile(`output/SplitPDFByNumberOfPagesOutput_${i}.pdf`));\n           }\n           return Promise.all(saveFilesPromises);\n       })\n       .catch(err => {\n           if(err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n     \n")),(0,r.mdx)("h4",{id:"rest-api"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-splitPDF\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n    \\"cpf:inputs\\": {\n        \\"params\\": {\n            \\"cpf:inline\\": {\n                \\"pageCount\\": 4\n            }\n        },\n        \\"documentIn\\": {\n            \\"cpf:location\\": \\"InputFile0\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    },\n    \\"cpf:engine\\": {\n        \\"repo:assetId\\": \\"urn:aaid:cpf:Service-d99c7660cba14e5c98f9023221dab40f\\"\n    },\n    \\"cpf:outputs\\": {\n        \\"documentOutList\\": {\n            \\"cpf:location\\": \\"multipartLabelOut\\",\n            \\"dc:format\\": \\"text/directory\\"\n        }\n    }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\'\n')),(0,r.mdx)("h2",{id:"split-pdf-by-page-ranges"},"Split PDF by page ranges"),(0,r.mdx)("p",null,"As an alternative to creating smaller PDFs with a set number of pages,\nyou can split PDFs into multiple smaller documents by specifying page\nranges where each page range corresponds to a single output file."),(0,r.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFByPageRanges\n \n    public class SplitPDFByPageRanges {\n   \n      // Initialize the logger.\n      private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFByPageRanges.class);\n   \n      public static void main(String[] args) {\n          try {\n              // Initial setup, create credentials instance.\n              Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                      .fromFile("pdfservices-api-credentials.json")\n                      .build();\n   \n              // Create an ExecutionContext using credentials and create a new operation instance.\n              ExecutionContext executionContext = ExecutionContext.create(credentials);\n              SplitPDFOperation splitPDFOperation = SplitPDFOperation.createNew();\n   \n              // Set operation input from a source file.\n              FileRef source = FileRef.createFromLocalFile("src/main/resources/splitPDFInput.pdf");\n              splitPDFOperation.setInput(source);\n   \n              // Set the page ranges where each page range corresponds to a single output file.\n              PageRanges pageRanges = getPageRanges();\n              splitPDFOperation.setPageRanges(pageRanges);\n   \n              // Execute the operation.\n              List result = splitPDFOperation.execute(executionContext);\n   \n              // Save the result to the specified location.\n              int index = 0;\n              for (FileRef fileRef : result) {\n                  fileRef.saveAs("output/SplitPDFByPageRangesOutput_" + index + ".pdf");\n                  index++;\n              }\n   \n          } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n              LOGGER.error("Exception encountered while executing operation", e);\n          }\n      }\n   \n      private static PageRanges getPageRanges() {\n          // Specify page ranges.\n          PageRanges pageRanges = new PageRanges();\n          // Add page 1.\n          pageRanges.addSinglePage(1);\n   \n          // Add pages 3 to 4.\n          pageRanges.addRange(3, 4);\n          return pageRanges;\n      }\n   \n    }\n      \n')),(0,r.mdx)("h4",{id:"net-1"},".NET"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd SplitPDFByPageRanges/\n// dotnet run SplitPDFByPageRanges.csproj\n\n namespace SplitPDFByPageRanges\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            //Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Create a new operation instance\n                SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();\n \n                // Set operation input from a source file.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");\n                splitPDFOperation.SetInput(sourceFileRef);\n \n                // Set the page ranges where each page range corresponds to a single output file.\n                PageRanges pageRanges = GetPageRanges();\n                splitPDFOperation.SetPageRanges(pageRanges);\n \n                // Execute the operation.\n                List result = splitPDFOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                int index = 0;\n                foreach (FileRef fileRef in result)\n                {\n                    fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/SplitPDFByPageRangesOutput_" + index + ".pdf");\n                    index++;\n                }\n \n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            // Catch more errors here . . .\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n \n        private static PageRanges GetPageRanges()\n        {\n            // Specify page ranges.\n            PageRanges pageRanges = new PageRanges();\n            // Add page 1.\n            pageRanges.AddSinglePage(1);\n \n            // Add pages 3 to 4.\n            pageRanges.AddRange(3, 4);\n            return pageRanges;\n        }\n    }\n  }\n')),(0,r.mdx)("h4",{id:"node-js-1"},"Node JS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/splitpdf/split-pdf-by-page-ranges.js\n\n  const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n  const getPageRanges = () => {\n    // Specify pages ranges.\n    const pageRanges = new PDFServicesSdk.PageRanges();\n    // Add page 1.\n    pageRanges.addSinglePage(1);\n \n    // Add pages 3 to 4.\n    pageRanges.addPageRange(3, 4);\n    return pageRanges;\n  };\n  try {\n    // Initial setup, create credentials instance.\n    const credentials =  PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n \n    // Create an ExecutionContext using credentials\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n \n    // Create a new operation instance.\n    const splitPDFOperation = PDFServicesSdk.SplitPDF.Operation.createNew(),\n        input = PDFServicesSdk.FileRef.createFromLocalFile(\n            'resources/splitPDFInput.pdf',\n            PDFServicesSdk.SplitPDF.SupportedSourceFormat.pdf\n        );\n    // Set operation input from a source file.\n    splitPDFOperation.setInput(input);\n \n    // Set the page ranges where each page range corresponds to a single output file.\n    const pageRanges = getPageRanges();\n    splitPDFOperation.setPageRanges(pageRanges);\n \n    // Execute the operation and Save the result to the specified location.\n    splitPDFOperation.execute(executionContext)\n        .then(result => {\n            let saveFilesPromises = [];\n            for(let i = 0; i < result.length; i++){\n                saveFilesPromises.push(result[i].saveAsFile(`output/SplitPDFByPageRangesOutput_${i}.pdf`));\n            }\n            return Promise.all(saveFilesPromises);\n        })\n        .catch(err => {\n            if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n  } catch (err) {\n    console.log('Exception encountered while executing operation', err);\n  }\n")),(0,r.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-splitPDF\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n    \\"cpf:inputs\\": {\n        \\"params\\": {\n            \\"cpf:inline\\": {\n                \\"pageRanges\\": [{\n                    \\"start\\": 2,\n                    \\"end\\": 4\n                }, {\n                    \\"start\\": 7,\n                    \\"end\\": 9\n                }]\n            }\n        },\n        \\"documentIn\\": {\n            \\"cpf:location\\": \\"InputFile0\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    },\n    \\"cpf:engine\\": {\n        \\"repo:assetId\\": \\"urn:aaid:cpf:Service-d99c7660cba14e5c98f9023221dab40f\\"\n    },\n    \\"cpf:outputs\\": {\n        \\"documentOutList\\": {\n            \\"cpf:location\\": \\"multipartLabelOut\\",\n            \\"dc:format\\": \\"text/directory\\"\n        }\n    }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\'\n')),(0,r.mdx)("h2",{id:"split-pdf-into-number-of-files"},"Split PDF into number of files"),(0,r.mdx)("p",null,"As an alternative to creating smaller PDFs by specifying a set number of\npages or a page range, you can split PDFs by file count. In this case,\nthe operation creates the specified number of files with each containing\nan identical number of pages (if possible)."),(0,r.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFIntoNumberOfFiles\n \n     public class SplitPDFIntoNumberOfFiles {\n    \n       // Initialize the logger.\n       private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFIntoNumberOfFiles.class);\n    \n       public static void main(String[] args) {\n           try {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                       .fromFile("pdfservices-api-credentials.json")\n                       .build();\n    \n               // Create an ExecutionContext using credentials and create a new operation instance.\n               ExecutionContext executionContext = ExecutionContext.create(credentials);\n               SplitPDFOperation splitPDFOperation = SplitPDFOperation.createNew();\n    \n               // Set operation input from a source file.\n               FileRef source = FileRef.createFromLocalFile("src/main/resources/splitPDFInput.pdf");\n               splitPDFOperation.setInput(source);\n    \n               // Set the number of documents to split the input PDF file into.\n               splitPDFOperation.setFileCount(2);\n    \n               // Execute the operation.\n               List result = splitPDFOperation.execute(executionContext);\n    \n               // Save the result to the specified location.\n               int index = 0;\n               for (FileRef fileRef : result) {\n                   fileRef.saveAs("output/SplitPDFIntoNumberOfFilesOutput_" + index + ".pdf");\n                   index++;\n               }\n    \n           } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n               LOGGER.error("Exception encountered while executing operation", e);\n           }\n       }\n    \n     }\n      \n')),(0,r.mdx)("h4",{id:"net-2"},".NET"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd SplitPDFIntoNumberOfFiles/\n// dotnet run SplitPDFIntoNumberOfFiles.csproj\n\n  namespace SplitPDFIntoNumberOfFiles\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            //Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Create a new operation instance\n                SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();\n \n                // Set operation input from a source file.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");\n                splitPDFOperation.SetInput(sourceFileRef);\n \n                // Set the number of documents to split the input PDF file into.\n                splitPDFOperation.SetFileCount(2);\n \n                // Execute the operation.\n                List result = splitPDFOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                int index = 0;\n                foreach (FileRef fileRef in result)\n                {\n                    fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/SplitPDFIntoNumberOfFilesOutput_" + index + ".pdf");\n                    index++;\n                }\n \n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n             // Catch more errors here . . .\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n  }\n      \n')),(0,r.mdx)("h4",{id:"node-js-2"},"Node JS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/splitpdf/split-pdf-into-number-of-files.js\n\n   const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n  \n   try {\n     // Initial setup, create credentials instance.\n     const credentials =  PDFServicesSdk.Credentials\n         .serviceAccountCredentialsBuilder()\n         .fromFile(\"pdfservices-api-credentials.json\")\n         .build();\n  \n     // Create an ExecutionContext using credentials\n     const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n  \n     // Create a new operation instance.\n     const splitPDFOperation = PDFServicesSdk.SplitPDF.Operation.createNew(),\n         input = PDFServicesSdk.FileRef.createFromLocalFile(\n             'resources/splitPDFInput.pdf',\n             PDFServicesSdk.SplitPDF.SupportedSourceFormat.pdf\n         );\n     // Set operation input from a source file.\n     splitPDFOperation.setInput(input);\n  \n     // Set the number of documents to split the input PDF file into.\n     splitPDFOperation.setFileCount(2);\n  \n     // Execute the operation and Save the result to the specified location.\n     splitPDFOperation.execute(executionContext)\n         .then(result => {\n             let saveFilesPromises = [];\n             for(let i = 0; i < result.length; i++){\n                 saveFilesPromises.push(result[i].saveAsFile(`output/SplitPDFIntoNumberOfFilesOutput_${i}.pdf`));\n             }\n             return Promise.all(saveFilesPromises);\n         })\n         .catch(err => {\n             if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                 || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                 console.log('Exception encountered while executing operation', err);\n             } else {\n                 console.log('Exception encountered while executing operation', err);\n             }\n         });\n   } catch (err) {\n     console.log('Exception encountered while executing operation', err);\n   }\n")),(0,r.mdx)("h4",{id:"rest-api-2"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-splitPDF\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n    \\"cpf:inputs\\": {\n        \\"params\\": {\n            \\"cpf:inline\\": {\n                \\"fileCount\\": 2\n            }\n        },\n        \\"documentIn\\": {\n            \\"cpf:location\\": \\"InputFile0\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    },\n    \\"cpf:engine\\": {\n        \\"repo:assetId\\": \\"urn:aaid:cpf:Service-d99c7660cba14e5c98f9023221dab40f\\"\n    },\n    \\"cpf:outputs\\": {\n        \\"documentOutList\\": {\n            \\"cpf:location\\": \\"multipartLabelOut\\",\n            \\"dc:format\\": \\"text/directory\\"\n        }\n    }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\'\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-split-pdf-md-0e0bbc37b79787b3bccd.js.map